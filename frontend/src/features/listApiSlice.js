import { apiSlice } from '../app/api/apiSlice';

export const listAPiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAstrologers: builder.query({
            query: () => ({
                url: '/',

            })
        })
    })
})

export const { useGetAstrologersQuery } = listAPiSlice