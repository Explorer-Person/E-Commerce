import { MapStyle } from "@src/shared/"
import React from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css';

import { debounce } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@src/stores/hooks";
import { storeSearchQuery, storeSearchResults, storeSuggests } from "../slices";
import { RootState } from "@src/stores/store";



const Search = () => {
    const dispatch = useAppDispatch();
    const { coords, searchQuery, suggests } = useAppSelector((state: RootState) => state.mapData)

    const placeFinder = async (apiKey: string, query: string, lat: number, lng: number, limit = 5, radius = 10000) => {
        const baseUrl = 'https://api.tomtom.com/search/2/poiSearch';
        const queryString = `limit=${limit}&lat=${lat}&lon=${lng}&radius=${radius}&key=${apiKey}`;
        const response = await fetch(`${baseUrl}/${query}.json?${queryString}`, { method: "GET" });
        return response;

    }
    const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatch(storeSearchQuery(value));
        if (value.trim() !== '') {
            debouncedSearch(value, "storeSuggests");
        } else {
            dispatch(storeSearchQuery(''));
            dispatch(storeSuggests([]));
        }
    }
    const normalSearch = async (value: string, process: string) => {
        const datas = await placeFinder(import.meta.env.VITE_TT_MAPS_API_KEY, value, coords.lat, coords.lon);
        const data = await datas.json();
        if (process === "storeSuggests") {
            dispatch(storeSuggests(data.results));
        } else if (process === "storeSearch") {
            console.log("storeSearch");
            dispatch(storeSearchResults(data.results));
        }
    }
    const debouncedSearch = debounce(async (value: string, process: string) => {
        if ([5, 10, 15, 20, 25, 30].includes(value.length)) {
            return normalSearch(value, process);
        }
    })
    const handleSearchSubmit = async () => {
        try {
            if (searchQuery?.trim() !== '' && searchQuery) {
                console.log(searchQuery);
                normalSearch(searchQuery, "storeSearch");
            } else {
                console.log("error");
            }
        } catch (err) {
            console.log(err);
        }

    }

    const getSuggestionValue = async (event: React.MouseEvent<HTMLLIElement>) => {
        const target = event.target as HTMLLIElement;
        const value = target.textContent;

        if (value) {
            dispatch(storeSearchQuery(value));
            if (searchQuery) {
                normalSearch(searchQuery, "storeSearch");
                return dispatch(storeSuggests([]));
            }
        }

    }

    return (
        <div className={MapStyle.searchForm}>
            <input
                type="text"
                placeholder="Search for nearby places"
                onChange={handleSearchChange}
                value={searchQuery}
                className={MapStyle.searchInput}
            />
            <button onClick={handleSearchSubmit} type="submit" className={MapStyle.searchButton}>Search</button>
            {
                suggests.length > 0 ? (
                    <ul className={`${MapStyle.suggestsList}`}>
                        {suggests.map((suggestion: { address: { freeformAddress: string }, poi: { name: string } }, index) => (
                            <li onClick={getSuggestionValue} key={index} className={`${MapStyle.suggestionItem}`}>
                                <span className={`${MapStyle.suggestionAddress}`}>{suggestion.address.freeformAddress}</span> -
                                <span className={`${MapStyle.suggestionName}`}>{suggestion.poi.name}</span>
                            </li>
                        ))}
                    </ul>
                ) : <ul className={`${MapStyle.noResults}`}></ul>
            }
        </div>
    );

}

export default Search;