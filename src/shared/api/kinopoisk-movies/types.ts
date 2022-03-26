export interface KinopoiskMoviesTop250List {
  films: KinopoiskMovieDetails[]
  pageCount: number
}

export interface KinopoiskFilmsGenre {
  items: KinopoiskFilmsGenreDetails[]
  totalPages: number
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
interface KinopoiskFilmsGenreDetails {
  kinopoiskId: number
  nameRu: string
  posterUrlPreview: string
  ratingKinopoisk: number
}
