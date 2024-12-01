/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL';


const booksApi = createApi({
    reducerPath: 'booksApi',

    baseQuery: fetchBaseQuery({ 
        baseUrl: `${getBaseUrl()}/api/books`,  // `https://books-shop.com/api/books` / http://localhost:3001
        credentials: 'include',
        prepareHeaders: (Headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                Headers.set('Authorization', `Bearer ${token}`);
            }
            return Headers;
        }
    }),

    tagTypes: ['Books'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => "/",
            providesTags: ["Books"]
        })
    })
});


export const {useFetchAllBooksQuery} = booksApi;
export default booksApi;