import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { KinopoiskMoviesTop250List, KinopoiskFilmsGenre } from './types'

const headers = {
  'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_KEY,
  'Content-Type': 'application/json',
}

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_KINOPOISK_BASE_URl }),
  endpoints: (builder) => ({
    getTop250: builder.query<KinopoiskMoviesTop250List, { page: number }>({
      query: (arg) => {
        const { page } = arg
        return {
          headers,
          url: `top?type=TOP_250_BEST_FILMS&page=${page}`,
        }
      },
    }),
    getFilmsByGenre: builder.query<KinopoiskFilmsGenre, { genre: number; page: number }>({
      query: (arg) => {
        const { page, genre } = arg

        return {
          headers,
          url: `?genres=${genre}&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`,
        }
      },
    }),
  }),
})

export const { useGetTop250Query, useGetFilmsByGenreQuery } = kinopoiskApi
