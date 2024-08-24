import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RequestPutAddressIF } from "./interface";
import { AddressIF, ResponseAddressRequestIF } from "@src/shared/interfaces";

 const putAddressApi = createApi({
  reducerPath: "putAddressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) =>({
    putAddress: builder.mutation<ResponseAddressRequestIF, RequestPutAddressIF>({
        query: (data: {addressData: AddressIF, addressId: string}) =>({
            url: "/user/address/change",
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
              data: data
            }
        }),
    }),
  }),
});


export const {usePutAddressMutation} = putAddressApi;
export default putAddressApi;
