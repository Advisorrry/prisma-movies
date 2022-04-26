export interface KinopoiskMoviesTop250List {
  films: KinopoiskFilmsData[]
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
  filmId: number
  nameRu: string
  posterUrlPreview: string
  rating: number
  year: string
}

interface KinopoiskFilmsData extends KinopoiskFilmsGenreDetails {

}
