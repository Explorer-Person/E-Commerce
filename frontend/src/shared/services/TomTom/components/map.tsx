import { MapAddressIF, MapStyle, storeAddress } from "@src/shared/"
import { useEffect, useRef, useState } from "react";
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css'; // Import only the maps CSS file
import Banner from "./banner";
import { useAppDispatch, useAppSelector } from "@src/stores/hooks";
import { storeCoords, storeGeoError, storeZoom } from "../slices";
import { RootState } from "@src/stores/store";
import Search from "./search";



const TTMap = () => {
    const dispatch = useAppDispatch();
    const mapElement = useRef<HTMLDivElement>(null);
    const { coords, zoom, searchResults } = useAppSelector((state: RootState) => state.mapData)
    const storedAddress = useAppSelector((state: RootState) => state.address.address)
    const processStatus = useAppSelector((state: RootState) => state.profileActions.processStatus)
    const [map, setMap] = useState({});

    useEffect(() => {
        const getLocation = () => {
            if (processStatus !== "put") {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        dispatch(storeCoords({ lat: latitude, lon: longitude }));
                        const response = await reverseGeocode();
                        const data = await response.json();
                        if (data) {
                            const responseAddress = data.addresses[0].address;
                            const addressData = handleAddressData(responseAddress);
                            if (addressData) {
                                dispatch(storeAddress({
                                    ...addressData,
                                    id: "",
                                    isSelected: 0
                                }));
                            }
                        }
                    },
                    (error) => {
                        dispatch(storeGeoError(`${error}`))
                        console.warn("Not Okay")
                    }
                );
            }

        };
        getLocation();
    }, [coords]);

    useEffect(() => {
        if (map && coords && mapElement.current) {
            // Create a new map instance only once
            const mapInstance = tt.map({
                key: import.meta.env.VITE_TT_MAPS_API_KEY,
                container: mapElement.current,
                center: [coords.lon, coords.lat], // Use the updated coordinates
                zoom: zoom
            });
            setMap(mapInstance);
            // Add marker after the map is initialized
            if (searchResults && searchResults.length > 0) {
                searchResults.map((result: { position: { lat: number, lon: number } }) => {
                    const { lat, lon } = result.position;
                    new tt.Marker().setLngLat([lon, lat]).addTo(mapInstance);
                })
            }

            mapInstance.on("click", async (event) => {
                try {
                    dispatch(storeCoords({ lat: event.lngLat.lat, lon: event.lngLat.lng }));
                    const response = await reverseGeocode();
                    const data = await response.json();
                    const id = processStatus === "put" ? storedAddress.id : "";
                    console.log(storedAddress);
                    if (data) {
                        const responseCoords = data.addresses[0].position;
                        const responseAddress = data.addresses[0].address;
                        const [lat, lon] = responseCoords.split(",");
                        const addressData = handleAddressData(responseAddress);
                        if (addressData) {
                            dispatch(storeAddress({
                                ...addressData,
                                id: id,
                                isSelected: processStatus === "put" ? storedAddress.isSelected : 0,
                            }));
                        }
                        return new tt.Marker().setLngLat([lon, lat]).addTo(mapInstance);
                    }
                } catch (err) {
                    console.log(err);
                }

            });
            // Update the zoom level when the map is zoomed
            mapInstance.on('zoom', (event) => {
                dispatch(storeZoom(event.target.getZoom()))
            });

            new tt.Marker().setLngLat([coords.lon, coords.lat]).addTo(mapInstance);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coords, searchResults]);

    const reverseGeocode = async () => {
        const response = await fetch(`${import.meta.env.VITE_SERVER_PORT}/services/TT/api/reverseGeocode/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ coords })
        });
        return response
    }
    const handleAddressData = (responseAddress: MapAddressIF) => {
        const addressId = processStatus === "put" ? storedAddress.id : "";
        const addressData = {
            id: addressId,
            country: responseAddress.country,
            city: responseAddress.municipality,
            district: responseAddress.localName,
            street: responseAddress.street,
            buildingNumber: responseAddress.buildingNumber,
            neighborhood: "null",
            postalCode: responseAddress.postalCode,
            addressType: "null",
            openAddress: responseAddress.freeformAddress,
        }
        return addressData;
    }
    return (
        <div className={MapStyle.mapContainer}>
            <Banner />
            <Search />
            <div ref={mapElement} className={MapStyle.map}></div>
        </div>

    );

}

export default TTMap;