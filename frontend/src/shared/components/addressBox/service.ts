

// export const fetchCountries = async () => {
//   const fetches = await fetch("https://restcountries.com/v3.1/all");
//   const response = await fetches.json();
//   const countryNames = await response.map((element: { name: { common: string } }) => {
//     return element.name.common;
//   });
//   return countryNames;
// };

// export const fetchCities = async (selectedCountry:string) => {
//   const fetches = await fetch(`${import.meta.env.VITE_SERVER_PORT}/api/map/cities/${selectedCountry}`, {
//     method: "GET",
//   });
//   const response = await fetches.json();
//   return response;
// };

// export const fetchDistricts = async (selectedCity:string) => {
//     const fetches = await fetch(`${import.meta.env.VITE_SERVER_PORT}/api/map/districts/${selectedCity}`, {
//       method: "GET",
//     });
//     const response = await fetches.json();
//     return response;
//   };

//   export const fetchNeighborhoods = async (selectedDistrict:string) => {
//     const fetches = await fetch(`${import.meta.env.VITE_SERVER_PORT}/api/map/districts/${selectedDistrict}`, {
//       method: "GET",
//     });
//     const response = await fetches.json();
//     return response;
//   };
