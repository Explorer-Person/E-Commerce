import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserDataIF } from "@src/features/profile/slices/user/interface";
import { ResponseGetUserIF } from "../../get/user/interface";

const editUserApi = createApi({
  reducerPath: "editUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    editUser: builder.mutation<ResponseGetUserIF, UserDataIF>({
      query: (userData) => ({
        url: "/user/edit",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: { userData: userData },
      }),
    }),
  }),
});

export const { useEditUserMutation } = editUserApi;
export default editUserApi;
