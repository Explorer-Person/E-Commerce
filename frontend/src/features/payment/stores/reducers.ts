import {combineReducers} from "@reduxjs/toolkit"
import { InfoReducer } from "../slices";

const PaymentReducers = combineReducers({
    InfoReducer: InfoReducer
});

export default PaymentReducers;

