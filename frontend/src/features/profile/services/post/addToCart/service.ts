import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ResponseCartRequestIF { 
  status: number;
  process: string;
  message: string;
}
const addToCartApi = createApi({
  reducerPath: "addToCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation<ResponseCartRequestIF, string>({
      query: (productId) => ({
        url: "/user/cart/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { productId: productId },
      }),
    }),
  }),
});

export const { useAddToCartMutation } = addToCartApi;
export default addToCartApi;
