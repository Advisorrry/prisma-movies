export interface TvList {
  page: number
  results: TvData[]
}
export enum Category {
  TOP_RATED = 'top_rated',
  POPULAR = 'popular',
  LATEST = 'latest',
}

export interface TvDetails {
  adult: boolean
  overview: string
  poster_path: string
  first_air_date: string
  last_air_date: string
  name: string
  vote_average: number
  number_of_seasons: number
  genres: { id: number; name: string }[]
}

export interface TvData {
  adult: boolean
  poster_path: string
  popularity: number
  name: string
  vote_average: number
  id: number
  first_air_date: string
}
