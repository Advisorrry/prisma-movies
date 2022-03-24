import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { KinopoiskMoviesList } from './types'

export const kinopoiskTop250Api = createApi({
  reducerPath: 'kinopoiskTop250Api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_KINOPOISK_BASE_URl }),
  endpoints: (builder) => ({
    getTop250: builder.query<KinopoiskMoviesList, { page: number }>({
      query: (arg) => {
        const { page } = arg
        return {
          headers: {
            'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_KEY,
            'Content-Type': 'application/json',
          },
          url: `top?page=${page}`,
        }
      },
    }),
  }),
})

export const { useGetTop250Query } = kinopoiskTop250Api
