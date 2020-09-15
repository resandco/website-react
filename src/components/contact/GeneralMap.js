import React, {useState, useRef} from 'react';
import GoogleMapReact from "google-map-react"

const Marker = ({children}) => children;

export default function GeneralMap({ coordinates }) {

    // 1) map setup
    const mapRef = useRef();
    const [, setZoom] = useState(13);
    const [, setBounds] = useState(null);

    // 4) render map
    return (
        <>
            <div className="map-container map-height w-100">
                <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAYzby4yYDVaXPmtu4jZAGR258K6IYwjIY&libraries'}}
                defaultCenter={coordinates}
                defaultZoom={14}
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
                >
                    <Marker
                        lat={coordinates.lat}
                        lng={coordinates.lng}
                    >
                        <div className="restaurant-marker">
                            <svg viewBox="0 0 365 560" preserveAspectRatio="none">
                                <path d="M182.9 551.7c0 .1.2.3.2.3s175.2-269 175.2-357.4c0-130.1-88.8-186.7-175.4-186.9C96.3 7.9 7.5 64.5 7.5 194.6 7.5 283 182.8 552 182.8 552l.1-.3zm-60.7-364.5c0-33.6 27.2-60.8 60.8-60.8 33.6 0 60.8 27.2 60.8 60.8S216.5 248 182.9 248c-33.5 0-60.7-27.2-60.7-60.8z"/>
                            </svg>
                        </div>
                    </Marker>
                </GoogleMapReact>
            </div>
        </>
    );
}