import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { kinopoiskApi } from '../shared/api/kinopoisk-movies'
import { moviedb_filmsApi } from '../shared/api/moviedb-films'
import rootReducer from '../shared/redux/reducers'

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviedb_filmsApi.middleware).concat(kinopoiskApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
