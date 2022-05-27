import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../widgets/header'
import { FilmDetails } from './films-page/film-details'
import { SeriesDetails } from './series-page/series-details'
import { TopDetails } from './top-page/top-details'

const FavoritesPage = lazy(() => import('./favorites-page'))
const SeriesPage = lazy(() => import('./series-page'))
const FilmsPage = lazy(() => import('./films-page'))
const TopPage = lazy(() => import('./top-page'))

export const Routing = () => {
  return (
    <div className="App">
      <Header />
      {/* <Options /> потом подумаю как лучше это реализовать */}
      <Routes>
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/films/:filmId" element={<FilmDetails />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/series/:tvId" element={<SeriesDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/top" element={<TopPage />} />
        <Route path="/top/:filmId" element={<TopDetails />} />
        <Route path="/" element={<Navigate to="/films" replace />} />
      </Routes>
    </div>
  )
}
