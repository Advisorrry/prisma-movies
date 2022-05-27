export interface KinopoiskMoviesTop250List {
  films: KinopoiskFilmsData[]
  pageCount: number
}

export interface KinopoiskFilmsGenre {
  items: KinopoiskFilmsGenreDetails[]
  totalPages: number
}

export interface KinopoiskMovieDetails {
  filmId: number
  genres: {
    genre: string
  }[]
  nameRu: string
  posterUrl: string
  year: string
  ratingKinopoisk: number
  description: string
  shortDescription: string
  filmLength: number
}
interface KinopoiskFilmsGenreDetails {
  filmId: number
  nameRu: string
  posterUrlPreview: string
  rating: number
  year: string
}

interface KinopoiskFilmsData {
  filmId: number
  filmLength: number
  genres: []
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  rating: number
  year: string
}
