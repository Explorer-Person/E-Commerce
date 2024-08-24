import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginResponseIF } from "./interface";
import { loginDataIF } from "../../slices/storeInput/interface";

const loginApi = createApi({
  reducerPath: "loginReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      postLogin: builder.mutation<LoginResponseIF, loginDataIF>({
        query: (loginData) => ({
          url: "/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { loginData: loginData },
        }),
      }),
    };
  },
});


export default loginApi;
export const {usePostLoginMutation} = loginApi;