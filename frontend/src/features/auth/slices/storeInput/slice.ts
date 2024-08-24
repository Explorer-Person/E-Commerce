import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { inputDataStateIF, loginDataIF, signupDataIF } from "./interface";



const initialState: inputDataStateIF = {
    signupData: {
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    },
    loginData: {
       username: "",
       password: "",
    },
    authStatus: false,
}

export const storeInputSlice = createSlice({
    name: "storeInputReducer",
    initialState,
    reducers: {
        storeLoginData: (state, action: PayloadAction<loginDataIF>) =>{
              state.loginData = action.payload;
        },
        storeSignupData: (state, action: PayloadAction<signupDataIF>) =>{
              state.signupData = action.payload;
        },
        setAuthStatus: (state, action: PayloadAction<boolean>) =>{
            state.authStatus = action.payload;
        }
    }
});

export const {storeLoginData, storeSignupData, setAuthStatus} = storeInputSlice.actions;
export default storeInputSlice.reducer;