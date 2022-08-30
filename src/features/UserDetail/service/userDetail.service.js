import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userDetailApi = createApi({
  reducerPath: "userDetailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchUserDetail: builder.query({
      query: ({ id }) => `/users/${id}`,
    }),
  }),
});

export const { useFetchUserDetailQuery } = userDetailApi;
