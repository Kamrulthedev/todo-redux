import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (Priority) => {
        const params = new URLSearchParams();
        if (params) {
          params.append("Priority", Priority);
        }
        return {
          url: "/tasks",
          methodL: "GET",
          params: { Priority },
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),

    UpdateTodo: builder.mutation({
      query: (options) => {
        return {
          url: `/task/${options.id}`,
          method: "PUT", 
          body: options.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation} = baseApi;
