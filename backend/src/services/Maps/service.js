require("dotenv").config();

const fetchCities = async(req,res,next) =>{
    const selectedCountry = req.params.selectedCountry;
    await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=cities+in+${selectedCountry}&fields=name,geometry&key=${process.env.GOOGLE_MAPS_API_KEY}`, {
    method: "GET",
  })
  .then(response=>{
    return response.json();
  })
  .then(response=>{
    const cities = response.results.map(city=>{
        return city.name
    });
    res.status(200).send(cities);
  });
 
}
const fetchDistricts = async(req,res,next) =>{
    const selectedCity = req.params.selectedCity;
    await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=districs+in+${selectedCity}&fields=name,geometry&key=${process.env.GOOGLE_MAPS_API_KEY}`, {
    method: "GET",
  })
  .then(response=>{
    return response.json();
  })
  .then(response=>{
    const districts = response.results.map(district=>{
        return district.name
    });
    res.status(200).send(districts);
  });
 
}

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=neighborhoods+in+New+York+City,USA&fields=name,geometry

const fetchNeigborhoods = async(req,res,next) =>{
    const selectedDistrict = req.params.selectedDistrict;
    await fetch(`
    https://maps.googleapis.com/maps/api/place/textsearch/json?query=neighborhoods+in+${selectedDistrict},USA&fields=name,geometry&key=${process.env.GOOGLE_MAPS_API_KEY}`, {
    method: "GET",
  })
  .then(response=>{
    return response.json();
  })
  .then(response=>{
    const neighborhoods = response.results.map(neighborhood=>{
        return neighborhood.name
    });
    res.status(200).send(neighborhoods);
  });
 
}
module.exports = {fetchCities, fetchDistricts, fetchNeigborhoods}