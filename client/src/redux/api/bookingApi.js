import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/booking/",  credentials: 'include', }),
  tagTypes: ["Booking"],
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query(body) {
        return {
          url: "/",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Bookings"],
    }),
    getBookings: builder.query({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});

export const {
 useCreateBookingMutation,
 useGetBookingsQuery
} = bookingApi;
