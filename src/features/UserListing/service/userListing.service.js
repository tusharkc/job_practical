import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userListingApi = createApi({
  reducerPath: "userListing",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    users: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useUsersQuery } = userListingApi;
