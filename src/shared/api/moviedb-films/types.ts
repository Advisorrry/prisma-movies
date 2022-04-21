export interface MovieList {
  page: number
  results: MovieData[]
}

export interface MovieDetails {
  adult: boolean
  budget: number
  genres: Genres
  overview: string
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  title: string
  vote_average: number
}

interface Genres {
  id: number
  name: string
}
export interface MovieData {
  adult: boolean
  poster_path: string
  popularity: number
  title: string
  vote_average: number
  id: number
}
