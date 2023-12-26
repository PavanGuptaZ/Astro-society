import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_LINK,
    credentials: 'include'
})

export const apiSlice = createApi({
    baseQuery,
    endpoints: () => ({})
})