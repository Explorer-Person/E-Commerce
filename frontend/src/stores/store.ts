import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { ProductReducers,  } from "@src/features/product"; // Import your combined reducers
import {
  ProductMiddlewares,
  filterProductsApi,
  getProductsApi,
} from "@src/features/product/services";
// import  ProductReducers  from "@src/features/product/slices";
import {AddressMiddlewares, mapDataReducers, addressReducers, getAddressApi, postAddressApi, deleteAddressApi, putAddressApi, confirmBoxReducers} from "@src/shared"
import { filterReducers, productReducers } from "@src/features/product/slices";
import { storeInputReducers } from "@src/features/auth/slices";
import { signupApi, loginApi, AuthMiddlewares } from "@src/features/auth";
import { UserMiddlewares, addToCartApi, getUserApi, profileActionsReducers, selectAddressApi, userReducers } from "@src/features/profile";
import { editUserApi } from "@src/features/profile/services/put";

const reducers = combineReducers({
  product: productReducers,
  filter: filterReducers,
  storeInput: storeInputReducers,
  user: userReducers,
  profileActions: profileActionsReducers,
  mapData: mapDataReducers,
  address: addressReducers,
  confirmBox: confirmBoxReducers,
  [getProductsApi.reducerPath]: getProductsApi.reducer,
  [filterProductsApi.reducerPath]: filterProductsApi.reducer,
  [signupApi.reducerPath]: signupApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [getUserApi.reducerPath]: getUserApi.reducer,
  [postAddressApi.reducerPath]: postAddressApi.reducer,
  [getAddressApi.reducerPath]: getAddressApi.reducer,
  [deleteAddressApi.reducerPath]: deleteAddressApi.reducer,
  [putAddressApi.reducerPath]: putAddressApi.reducer,
  [selectAddressApi.reducerPath]: selectAddressApi.reducer,
  [editUserApi.reducerPath]: editUserApi.reducer,
  [addToCartApi.reducerPath]: addToCartApi.reducer,

});

const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware({ serializableCheck: false }).concat(
    ...ProductMiddlewares,
    ...AuthMiddlewares,
    ...UserMiddlewares,
    ...AddressMiddlewares,
  );
};

export const store = configureStore({
  reducer: reducers,
  middleware: middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;
