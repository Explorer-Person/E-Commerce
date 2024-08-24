
export interface MapDataIF {
    coords: {lat: number, lon: number},
    zoom: number,
    geoError: string,
    searchResults: { position: { lat: number, lon: number } }[],
    searchQuery: string,
    suggests: { address: { freeformAddress: string }, poi: { name: string } }[],

}

// export interface AddressDataIF { 
//         country: string,
//         city: string,
//         district: string,
//         street: string,
//         buildingNumber: string,
//         neighborhood: string,
//         postalCode: string,
//         addressType: string,
//         openAddress: string,
// }