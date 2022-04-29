import { combineReducers, Reducer } from 'redux'
import { kinopoiskApi } from '../api/kinopoisk-movies'
import { moviedb_filmsApi } from '../api/moviedb-films'
import { moviedb_tvApi } from '../api/moviedb-tv'

const rootReducer: Reducer = combineReducers({
  [moviedb_filmsApi.reducerPath]: moviedb_filmsApi.reducer,
  [moviedb_tvApi.reducerPath]: moviedb_tvApi.reducer,
  [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
})

export default rootReducer
