import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchTodo: builder.query({
      query: ({ id }) => `/users/${id}/todos`,
    }),
  }),
});

export const { useFetchTodoQuery } = todoApi;
