import {combineReducers} from "@reduxjs/toolkit"
import BoxCounterReducer from "../slices/boxCounter/slice"

const HomeReducers = combineReducers({
     BoxCounterReducer: BoxCounterReducer, 
});

export default HomeReducers;

