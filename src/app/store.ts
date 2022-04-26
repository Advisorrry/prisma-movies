import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { kinopoiskApi } from '../shared/api/kinopoisk-movies'
import { moviedb_filmsApi } from '../shared/api/moviedb-films'
import { moviedb_tvApi } from '../shared/api/moviedb-tv'
import rootReducer from '../shared/redux/reducers'

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(moviedb_filmsApi.middleware)
      .concat(moviedb_tvApi.middleware)
      .concat(kinopoiskApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
