import { useAppSelector } from "@src/stores/hooks";
import { RootState } from "@src/stores/store";
// import { Component, useEffect, useState } from "react";


const Banner = () => {
  const {geoError, coords} = useAppSelector((state:RootState)=> state.mapData)
    if (geoError) {
      return <p className="banner warn">{geoError}</p>;
    } else if (coords.lat) {
      return (
        <p className="banner success">
          Lat: <strong>{coords.lat.toFixed(4)}</strong>,
          lon: <strong>{coords.lon.toFixed(4)}</strong>
        </p>
      );
    } else {
      return null;
    }
  };


export default Banner;