import { combineReducers } from "@reduxjs/toolkit";
// import ProductImgReducer from "../slices/productImg/slice";
import categoryReducer from "./filter/slice";
import productReducer from "./product/slice";

const ProductReducers = combineReducers({
  productReducer: productReducer,
  categoryReducer: categoryReducer,
});
// const ProductServiceReducers = combineReducers([
//   [[getProductsApi.reducerPath], getProductsApi.reducer],
// ])

// const ProductMiddlewares = [getProductsApi.middleware];

export default ProductReducers;