import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hallApi = createApi({
  reducerPath: "hallApi",
  baseQuery: fetchBaseQuery({ baseUrl: `/api/hall/`, 
    credentials: 'include',
   }),
  endpoints: (builder) => ({
    getHalls: builder.query({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});

export const { useGetHallsQuery } =
  hallApi;
