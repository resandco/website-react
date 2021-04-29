import React, { useState, useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import useSupercluster from 'use-supercluster'

const Marker = ({ children }) => children

const defaults = {
    france: {
        center: { lat: 46.2276, lng: 2.2137 },
        zoom: 6,
    },
    paris: {
        center: { lat: 48.853032, lng: 2.347713 },
        zoom: 12,
    },
    lyon: {
        center: { lat: 45.756892, lng: 4.854167 },
        zoom: 13,
    },
}

export default function MapViewCluster({
    restaurants,
    hoveredRestaurant,
    selectRestaurant,
    region,
}) {
    const mapRef = useRef()
    const [zoom, setZoom] = useState(defaults[region].zoom)
    const [bounds, setBounds] = useState(null)

    // 2) load and format data
    const points = restaurants.map((restaurant) => ({
        type: 'Feature',
        properties: {
            cluster: false,
            restaurantId: restaurant.id,
        },
        geometry: {
            type: 'Point',
            coordinates: [
                parseFloat(restaurant.coordinates.lng),
                parseFloat(restaurant.coordinates.lat),
            ],
        },
    }))

    // 3) get clusters
    const maxZoom = 20
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 80, maxZoom },
    })

    const handleClusterClick = ({
        currentTarget: {
            dataset: { clusterid, latitude, longitude },
        },
    }) => {
        const expansionZoom = Math.min(
            supercluster.getClusterExpansionZoom(parseInt(clusterid)),
            maxZoom
        )
        mapRef.current.setZoom(expansionZoom)
        mapRef.current.panTo({
            lat: parseFloat(latitude),
            lng: parseFloat(longitude),
        })
    }
    const handleMarkerClick = ({ currentTarget: { dataset } }) =>
        dataset.placeid && selectRestaurant(dataset.placeid)

    // 4) render map
    return (
        <>
            <div className="map-container map-height w-100">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key:
                            'AIzaSyAYzby4yYDVaXPmtu4jZAGR258K6IYwjIY&libraries',
                    }}
                    defaultCenter={defaults[region].center}
                    defaultZoom={defaults[region].zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map }) => {
                        mapRef.current = map
                    }}
                    onChange={({ zoom, bounds }) => {
                        setZoom(zoom)
                        setBounds([
                            bounds.nw.lng,
                            bounds.se.lat,
                            bounds.se.lng,
                            bounds.nw.lat,
                        ])
                    }}
                >
                    {clusters.map((cluster) => {
                        const [
                            longitude,
                            latitude,
                        ] = cluster.geometry.coordinates
                        const {
                            cluster: isCluster,
                            point_count: pointCount,
                        } = cluster.properties

                        return isCluster ? (
                            <Marker
                                key={cluster.id}
                                lat={latitude}
                                lng={longitude}
                            >
                                <div
                                    className="cluster-marker"
                                    style={{
                                        position: 'absolute',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                    data-clusterid={cluster.id}
                                    data-latitude={latitude}
                                    data-longitude={longitude}
                                    onClick={handleClusterClick}
                                >
                                    {pointCount}
                                </div>
                            </Marker>
                        ) : (
                            <Marker
                                key={cluster.properties.restaurantId}
                                lat={latitude}
                                lng={longitude}
                            >
                                <svg
                                    className={`restaurant-marker ${
                                        hoveredRestaurant ===
                                        cluster.properties.restaurantId
                                            ? 'restaurant-marker__hover'
                                            : ''
                                    }`}
                                    style={{
                                        position: 'absolute',
                                        transform: 'translate(-50%, -100%)',
                                    }}
                                    viewBox="0 0 365 560"
                                    preserveAspectRatio="none"
                                    data-placeid={
                                        cluster.properties.restaurantId
                                    }
                                    onClick={handleMarkerClick}
                                >
                                    <path d="M182.9 551.7c0 .1.2.3.2.3s175.2-269 175.2-357.4c0-130.1-88.8-186.7-175.4-186.9C96.3 7.9 7.5 64.5 7.5 194.6 7.5 283 182.8 552 182.8 552l.1-.3zm-60.7-364.5c0-33.6 27.2-60.8 60.8-60.8 33.6 0 60.8 27.2 60.8 60.8S216.5 248 182.9 248c-33.5 0-60.7-27.2-60.7-60.8z" />
                                </svg>
                            </Marker>
                        )
                    })}
                </GoogleMapReact>
            </div>
        </>
    )
}
