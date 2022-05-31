export interface MovieList {
  page: number
  results: MovieData[]
}

export enum Category {
  TOP_RATED = 'top_rated',
  POPULAR = 'popular',
  NOW_PLAYING = 'now_playing',
}

export interface MovieDetails {
  adult: boolean
  budget: number
  genres: Genres[]
  overview: string
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  title: string
  vote_average: number
}
export interface MovieData {
  adult: boolean
  poster_path: string
  popularity: number
  title: string
  vote_average: number
  id: number
  release_date: string
}

interface Genres {
  id: number
  name: string
}
