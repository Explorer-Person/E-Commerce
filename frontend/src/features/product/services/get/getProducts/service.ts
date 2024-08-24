import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseGetProductsIF } from "@src/shared";



 const getProductsApi = createApi({
  reducerPath: "getProductsReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      getProducts: builder.query<ResponseGetProductsIF,void>({
        query: () => ({
          url: "/products",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      }),
    };
  },
});

export default getProductsApi;
export const { useGetProductsQuery } = getProductsApi;
