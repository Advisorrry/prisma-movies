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
  name: string
  vote_average: number
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
