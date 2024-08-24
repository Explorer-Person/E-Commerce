// import { useEffect, useState } from 'react';
// import { AdvancedMarker, Map, APIProvider, MapMouseEvent } from '@vis.gl/react-google-maps';
// import { storeAddressData } from '@src/features';
// import { useAppDispatch, useAppSelector } from '@src/stores/hooks';
// import { RootState } from '@src/stores/store';
// import { AllAddressIF } from '@src/features/profile/slices/category/interface';

// interface GoogleMapIF {
//     height: string;
//     width: string;
//     margin: string;
// }
// interface CenterIF {
//     lat: number;
//     lng: number;
// }

// const GoogleMapService = ({ height, width, margin }: GoogleMapIF) => {
//     // const places = useMapsLibrary('geocoding');
//     const addressData = useAppSelector((state: RootState) => state.category.AddressInfo.value);
//     const [place, setPlace] = useState<string>("");
//     const dispatch = useAppDispatch();
//     const containerStyle = {
//         width: width,
//         height: height,
//         // marginTop: '5%',    
//         margin: margin,
//         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//         borderRadius: "10px",
//     };

//     const [center, setCenter] = useState<CenterIF>({ lat: -10.745, lng: -38.523 }); // Initial center

//     // for calling neighbourhoods: https://maps.googleapis.com/maps/api/place/textsearch/json?query=neighborhoods+in+New+York+City,USA&fields=name,geometry
//     // for calling cities: https://maps.googleapis.com/maps/api/place/textsearch/json?query=cities+in+France&fields=name,geometry&key=YOUR_API_KEY
//     // for calling districts:   https://maps.googleapis.com/maps/api/place/textsearch/json?query=districs+in+Paris&fields=name,geometry&key=YOUR_API_KEY
//     // default search parameter: https://maps.googleapis.com/maps/api/place/textsearch/json?query=Harlem&key=AIzaSyB5vVnsEJ-OdFUntQsQuaZcPI15KdSGY7c


//     useEffect(() => {
//         const geocoder = new google.maps.Geocoder();
//         const latlng = new window.google.maps.LatLng(center.lat, center.lng);

//         geocoder.geocode({ 'location': latlng }, (results, status) => {
//             if (status === 'OK') {
//                 if (results && results[0]) {
//                     const address = results[0].address_components;
//                     const keys = Object.keys(addressData);
//                     console.log(address);
//                     const data: AllAddressIF = {
//                         country: '',
//                         administrative_area_level_1: '', // -- there
//                         locality: '',
//                         administrative_area_level_2: '',
//                         sublocality: '',
//                         administrative_area_level_3: '',
//                         administrative_area_level_4: '',
//                         route: '',
//                         plus_code: '',
//                         whereAddress: '',
//                         openAddress: results[0].formatted_address,
//                         placeName: place,
//                         city: '',
//                         district: ''
//                     }; // Initialize empty AddressIF object
//                     for (const key of keys) {
//                         const component = address.find(element => {
//                           return element.types && element.types.includes(key)
//                         });
//                         if (component) {
//                             data[key as keyof AllAddressIF] = component.long_name;
//                         }
//                     }
//                     dispatch(storeAddressData({type: "object", key: "all", value: data}));

//                 }
//             } else {
//                 console.error('Geocoder failed due to: ' + status);
//             }
//         });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [center, dispatch]);


//     const selectLocation = (event: MapMouseEvent) => {
//         const latLng = event.detail.latLng;
//         if (latLng) {
//             const { lat, lng } = latLng;
//             const request = {
//                 location: { lat: lat, lng: lng },
//                 radius: 100,
//                 fields: ['name'],
//             }
//             const service = new google.maps.places.PlacesService(document.createElement('div'));
//             service.nearbySearch(request, (results, status) => {
//                 if (status === google.maps.places.PlacesServiceStatus.OK && results && results[0].name && results.length > 0) {
//                     setPlace(results[0].name);
//                     setCenter({ lat: lat, lng: lng });
//                 } else {
//                     console.error('Places service failed due to: ' + status);
//                 }
//             })
//         }

//     }

//     return (
//         <div>
//             <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//                 <Map
//                     style={containerStyle}
//                     mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
//                     defaultCenter={center}
//                     defaultZoom={10}
//                     gestureHandling={'greedy'} // Enable touch gesture handling
//                     onClick={selectLocation} // Update center on click if e.latLng is not null
//                 >
//                     <AdvancedMarker position={center} />
//                 </Map>
//             </APIProvider>

//             <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1 }}>
//                 <button>Select Location</button>
//             </div>
//         </div>
//     );

// };

// export default GoogleMapService;
