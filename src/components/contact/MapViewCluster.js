import React, {useState, useRef} from 'react';
import GoogleMapReact from "google-map-react"
import useSupercluster from "use-supercluster";
// import googleMapStyles from '../common/GoogleMapStyle'

const Marker = ({children}) => children;

export default function MapViewCluster({ restaurants, hoveredRestaurant, selectRestaurant }) {

    // 1) map setup
    const mapRef = useRef();
    const [zoom, setZoom] = useState(10);
    const [bounds, setBounds] = useState(null);

    // 2) load and format data
    const points = restaurants.map((restaurant) => ({
        type: "Feature",
        properties: {
            cluster: false,
            restaurantId: restaurant.id,
        },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(restaurant.coordinates.lng),
                parseFloat(restaurant.coordinates.lat)
            ]
        }
    }))

    // 3) get clusters
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: {radius: 75, maxZoom: 20}
    });

    const handleMarkerClick = (placeId) => {
        selectRestaurant(placeId)
    }

    // 4) render map
    return (
        <>
            <div className="map-container map-height w-100">
                <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAYzby4yYDVaXPmtu4jZAGR258K6IYwjIY&libraries'}}
                defaultCenter={{lat: 48.853032, lng: 2.3477133}}
                defaultZoom={12}
                yesIWantToUseGoogleMapApiInternals={false}
                onGoogleApiLoaded={({map}) => {
                    mapRef.current = map;
                }}
                onChange={({zoom, bounds}) => {
                    setZoom(zoom);
                    setBounds([
                        bounds.nw.lng,
                        bounds.se.lat,
                        bounds.se.lng,
                        bounds.nw.lat
                    ])
                }}
                onChildClick={handleMarkerClick}
                >
                    {clusters.map(cluster => {
                        const  [longitude, latitude]  = cluster.geometry.coordinates;
                        const {
                            cluster: isCluster,
                            point_count: pointCount
                        } = cluster.properties;

                        if(isCluster) {
                            return (
                                <Marker key={cluster.id} lat={latitude} lng={longitude}>
                                    <div
                                        className="cluster-marker"
                                        onClick={() => {
                                            const expansionZoom = Math.min(
                                                supercluster.getClusterExpansionZoom(cluster.id), 20
                                            );
                                            mapRef.current.setZoom(expansionZoom);
                                            mapRef.current.panTo({lat: latitude, lng: longitude})
                                        }}
                                    >{pointCount}</div>
                                </Marker>
                            )
                        }
                        return (
                            <Marker
                                key={cluster.properties.restaurantId}
                                lat={latitude}
                                lng={longitude}
                            >
                                <div className={`restaurant-marker ${hoveredRestaurant === cluster.properties.restaurantId ? 'restaurant-marker__hover' : ''}`}>
                                    <svg viewBox="0 0 365 560" preserveAspectRatio="none">
                                        <path d="M182.9 551.7c0 .1.2.3.2.3s175.2-269 175.2-357.4c0-130.1-88.8-186.7-175.4-186.9C96.3 7.9 7.5 64.5 7.5 194.6 7.5 283 182.8 552 182.8 552l.1-.3zm-60.7-364.5c0-33.6 27.2-60.8 60.8-60.8 33.6 0 60.8 27.2 60.8 60.8S216.5 248 182.9 248c-33.5 0-60.7-27.2-60.7-60.8z"/>
                                    </svg>
                                </div>
                            </Marker>
                        )
                    })}
                </GoogleMapReact>
            </div>
        </>
    );
}


