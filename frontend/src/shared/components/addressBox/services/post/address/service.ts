import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AddressIF, ResponseAddressRequestIF } from "@src/shared/interfaces";

 const postAddressApi = createApi({
  reducerPath: "postAddressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) =>({
    postAddress: builder.mutation<ResponseAddressRequestIF, AddressIF>({
        query: (addressData) =>({
            url: "/user/address/add",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
              addressData: addressData
            }
        }),
    }),
  }),
});


export const {usePostAddressMutation} = postAddressApi;
export default postAddressApi;
