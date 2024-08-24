import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilterDatasIF } from "../../../slices/filter/interface";
import { ResponseGetProductsIF } from "@src/shared";



 const filterProductsApi = createApi({
  reducerPath: "filterProductsReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      filterProducts: builder.mutation<ResponseGetProductsIF,FilterDatasIF>({
        query: (filterDatas) => ({
          url: "/products/filter",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {filterDatas: filterDatas},
        }),
      }),
    };
  },
});

export default filterProductsApi;
export const { useFilterProductsMutation } = filterProductsApi;
