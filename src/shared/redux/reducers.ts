import { combineReducers, Reducer } from 'redux'
import { kinopoiskTop250Api } from '../api/kinopoisk-top250'
import { moviedb_filmsApi } from '../api/moviedb-films'

const rootReducer: Reducer = combineReducers({
  [moviedb_filmsApi.reducerPath]: moviedb_filmsApi.reducer,
  [kinopoiskTop250Api.reducerPath]: kinopoiskTop250Api.reducer
})

export default rootReducer
