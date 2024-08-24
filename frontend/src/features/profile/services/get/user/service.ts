import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetUserResponseIF } from "./interface";

 const getUserApi = createApi({
  reducerPath: "getUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) =>({
    getUser: builder.query<GetUserResponseIF, void>({
        query: () =>({
            url: "/user",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }),
    }),
  }),
});


export const {useGetUserQuery} = getUserApi;
export default getUserApi;
