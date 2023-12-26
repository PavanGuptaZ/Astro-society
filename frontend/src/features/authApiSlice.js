import { apiSlice } from '../app/api/apiSlice';
import { setUser } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        registerAstrologer: builder.mutation({
            query: (body) => ({
                url: '/register',
                method: "POST",
                body
            })
        }),
        loginAstrologer: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: "POST",
                body
            }),
        }),
        updateAstrologer: builder.mutation({
            query: (body) => ({
                url: `/${body._id}`,
                method: 'PATCH',
                body
            })
        }),
        refreshUser: builder.mutation({
            query: () => ({
                url: '/refresh'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    const { user } = data
                    dispatch(setUser(user))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        logoutAstrologer: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST'
            })
        })
    })
})

export const {
    useRegisterAstrologerMutation,
    useLoginAstrologerMutation,
    useUpdateAstrologerMutation,
    useRefreshUserMutation,
    useLogoutAstrologerMutation
} = authApiSlice