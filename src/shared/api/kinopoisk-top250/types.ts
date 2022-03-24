export interface KinopoiskMoviesList {
  films: KinopoiskMovieDetails[]
  pageCount: number
}

interface KinopoiskMovieDetails {
  filmId: number
  filmLength: number
  genres: []
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  rating: string
  year: string
}
