import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductIF, ProductStateIF } from "./interface";


const initialState: ProductStateIF = {
    product: [],
    currentImg: "",
    
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        storeProduct: (state, action: PayloadAction<ProductIF[]>) =>{
            if(action.payload){
                state.product = action.payload;
            }else{
                console.log("error");
            }
        },
        imageSelector: (state, action: PayloadAction<string>) =>{
            if(action.payload){
                state.currentImg = action.payload
            }else{
                console.log("image not found");
            }
            
        },
    },
})

export const {storeProduct, imageSelector} = productSlice.actions;
export default productSlice.reducer;