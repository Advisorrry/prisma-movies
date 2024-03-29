import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { KinopoiskMoviesTop250List, KinopoiskFilmsGenre, KinopoiskMovieDetails } from './types'

const headers = {
  'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_KEY,
  'Content-Type': 'application/json',
}

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_KINOPOISK_BASE_URl }),
  endpoints: (builder) => ({
    getTop250: builder.query<KinopoiskMoviesTop250List, { page: number }>({
      query: ({ page }) => {
        return {
          headers,
          url: `top?type=TOP_250_BEST_FILMS&page=${page}`,
        }
      },
    }),
    getFilmsByGenre: builder.query<KinopoiskFilmsGenre, { genre: number; page: number }>({
      query: ({ page, genre }) => {
        return {
          headers,
          url: `?genres=${genre}&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`,
        }
      },
    }),
    getTop250Details: builder.query<KinopoiskMovieDetails, { filmId: string }>({
      query: ({ filmId }) => {
        return {
          headers,
          url: `${filmId}`,
        }
      },
    }),
  }),
})

export const { useGetTop250Query, useGetFilmsByGenreQuery, useGetTop250DetailsQuery } = kinopoiskApi
