import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignupResponseIF } from "./interface";
import { signupDataIF } from "../../slices/storeInput/interface";

const signupApi = createApi({
  reducerPath: "signupReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      postSignup: builder.mutation<SignupResponseIF, signupDataIF>({
        query: (signupData) => ({
          url: "/signup",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { signupData: signupData },
        }),
      }),
    };
  },
});


export default signupApi;
export const {usePostSignupMutation} = signupApi;