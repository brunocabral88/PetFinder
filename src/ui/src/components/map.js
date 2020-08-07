import React, { useState, useEffect } from "react";
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";
import PetFinderAPI from '../apis/pet-finder-api';

const Map = withScriptjs(
    withGoogleMap((props) => {
        const [center, setCenter] = useState({
            lat: 29.7376066,
            lng: -95.4851789,
        });

        const [markers, setMarkers] = useState([]);

        let mapRef;

        const centerMapToCurrentPosition = () => {
            navigator.geolocation.getCurrentPosition((pos) => {
                setCenter({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            });
        };

        const fetchNearbyPetEvents = async () => {
            if (!mapRef) return;

            const lat = mapRef.getCenter().lat();
            const lng = mapRef.getCenter().lng();

            const response = await PetFinderAPI.get('/api/pet-events', { params: { lat, long: lng }, withCredentials: false });
            // console.log(response);

            if (response && response.data.length > 0) {
                const markers = [];
                response.data.forEach(petEvent => {
                    markers.push(petEvent);
                });

                setMarkers(markers);
            }
            console.log(markers);
        };

        useEffect(() => {
            if ("geolocation" in navigator) {
                centerMapToCurrentPosition();
            }
            console.log(mapRef);
        }, []);

        return (
            <GoogleMap
                center={center}
                isMarkerShown
                defaultZoom={14}
                defaultCenter={center}
                onDragEnd={fetchNearbyPetEvents}
                ref={ref => mapRef = ref}
            >
                {markers.map((marker, idx) => 
                    <Marker position={{ lat: marker.location.coordinates[1], lng: marker.location.coordinates[0] }} key={idx} />)
                }
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap>
        );
    })
);

export default Map;
