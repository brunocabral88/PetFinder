import React, { useState, useEffect } from "react";
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";

const Map = withScriptjs(
    withGoogleMap((props) => {
        const [center, setCenter] = useState({
            lat: 29.7376066,
            lng: -95.4851789,
        });

        const centerMapToCurrentPosition = () => {
            navigator.geolocation.getCurrentPosition((pos) => {
                setCenter({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            });
        };

        useEffect(() => {
            if ("geolocation" in navigator) {
                centerMapToCurrentPosition();
            }
        }, []);

        return (
            <GoogleMap
                center={center}
                isMarkerShown
                defaultZoom={14}
                defaultCenter={center}
            >
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap>
        );
    })
);

export default Map;
