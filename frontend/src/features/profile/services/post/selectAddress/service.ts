import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseAddressRequestIF } from "@src/shared";

const selectAddressApi = createApi({
  reducerPath: "selectAddressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    selectAddress: builder.mutation<ResponseAddressRequestIF, string>({
      query: (addressId) => ({
        url: "/user/address/select",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { addressId: addressId },
      }),
    }),
  }),
});

export const { useSelectAddressMutation } = selectAddressApi;
export default selectAddressApi;
