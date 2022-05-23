import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TvList, TvDetails, Category } from './types'

export const moviedb_tvApi = createApi({
  reducerPath: 'moviedb_tvApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URl }),
  endpoints: (builder) => ({
    getTvList: builder.query<TvList, { category: Category | string; page: number }>({
      query: ({ category, page }) => {
        return {
          url: `tv/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=${page}`,
        }
      },
    }),
    getTvDetails: builder.query<TvDetails, { tvId: number }>({
      query: ({ tvId }) => {
        return {
          url: `tv/${tvId}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`,
        }
      },
    }),
  }),
})

export const { useGetTvListQuery, useGetTvDetailsQuery } = moviedb_tvApi
