import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseAddressRequestIF } from "@src/shared/interfaces";

const getAddressApi = createApi({
  reducerPath: "getAddressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAddresses: builder.query<ResponseAddressRequestIF, void>({
      query: () => ({
        url: "/user/addresses",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getAllAddresses: builder.mutation<ResponseAddressRequestIF, void>({
      query: () => ({
        url: "/user/addresses",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getAddress: builder.mutation<ResponseAddressRequestIF, string>({
      query: (addressId) => ({
        url: `/user/address/${addressId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getSelectedAddress: builder.query<ResponseAddressRequestIF, void>({
        query: () => ({
          url: `/user/address/selectedAddress/`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      }),
  }),
});

export const {
  useGetAddressesQuery,
  useGetAddressMutation,
  useGetAllAddressesMutation,
  useGetSelectedAddressQuery
} = getAddressApi;
export default getAddressApi;
