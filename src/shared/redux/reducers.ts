import { combineReducers, Reducer } from 'redux'
import { kinopoiskApi } from '../api/kinopoisk-movies'
import { moviedb_filmsApi } from '../api/moviedb-films'

const rootReducer: Reducer = combineReducers({
  [moviedb_filmsApi.reducerPath]: moviedb_filmsApi.reducer,
  [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
})

export default rootReducer
