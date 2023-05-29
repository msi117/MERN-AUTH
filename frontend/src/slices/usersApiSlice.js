import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/users'

//create end point and inject in the apiSlice endpoints
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //Put all of the queries
        //instead of completing in the apislice endpoints object 
        // we are doing in separate fil
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST', // default GET
                body: data
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST', // default GET
                body: data
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            }),
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            })
        })

    })
})

//specific naming convention 
export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation } = usersApiSlice