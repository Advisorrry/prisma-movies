import { combineReducers, Reducer } from 'redux'
import { theMoviedbApi } from '../api/moviedb'

const rootReducer: Reducer = combineReducers({
  [theMoviedbApi.reducerPath]: theMoviedbApi.reducer,
})

export default rootReducer
