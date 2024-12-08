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
        }),

        fetchBookById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{tyke: "Books", id}],
        }),

        addBook: builder.mutation({  // for get data is "query", for change data is "mutation"
            query: (newBook) => ({
                url: `/create-book`,
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ["Books"]
        }),

        updateBook: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Books"]
        }),

        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Books"]
        }),

    })
});


export const {useFetchAllBooksQuery, useFetchBookByIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation} = booksApi;
export default booksApi;