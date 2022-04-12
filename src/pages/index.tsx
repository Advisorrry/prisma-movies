import React, {lazy} from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../shared/ui/layout/layout'
import { Header } from '../widgets/header'
import { Options } from '../widgets/options-group'

const FavoritesPage = lazy(() => import("./favorites-page"));
const SeriesPage = lazy(() => import("./series-page"));
const FilmsPage = lazy(() => import("./films-page"));
const TopPage = lazy(() => import("./top-page"));


export const Routing  = () => {
  return (
    <div className="App">
      <Header />
      <Options />
      <Routes>
        <Route path="/" element={<FilmsPage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/top" element={<TopPage />} />
      </Routes>
    </div>
  )
}
