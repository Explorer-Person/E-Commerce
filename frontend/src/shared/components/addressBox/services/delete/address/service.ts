import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseAddressRequestIF } from "@src/shared/interfaces";

 const deleteAddressApi = createApi({
  reducerPath: "deleteAddressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) =>({
    deleteAddress: builder.mutation<ResponseAddressRequestIF, string>({
        query: (addressId) =>({
            url: "/user/address/delete",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
              addressId: addressId
            }
        }),
    }),
    deleteAddresses: builder.mutation<ResponseAddressRequestIF, void>({
      query: () =>({
          url: "/user/addresses/delete",
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
      }),
  }),
  }),
});


export const {useDeleteAddressMutation, useDeleteAddressesMutation} = deleteAddressApi;
export default deleteAddressApi;
