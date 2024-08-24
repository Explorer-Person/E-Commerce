import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataIF, UserStateIF } from "./interface";


const initialState: UserStateIF = {
    userData: {
        username: "",
        email: "",
        phone: "",
        role:  "",
        password: "",
        newPassword: "",
    },
    editedUserData: {
        username: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        newPassword: ""
    } 
}

const userSlice = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        storeUserData: (state, action: PayloadAction<UserDataIF>)=>{
             state.userData = action.payload;
        },
        storeEditedUserData: (state, action: PayloadAction<UserDataIF>)=>{
            state.editedUserData = action.payload;
       }
    }
});

export const {storeUserData, storeEditedUserData} = userSlice.actions;
export default userSlice.reducer;