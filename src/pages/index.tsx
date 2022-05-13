import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../widgets/header'
import { Options } from '../widgets/options-group'

const FavoritesPage = lazy(() => import('./favorites-page'))
const SeriesPage = lazy(() => import('./series-page'))
const FilmsPage = lazy(() => import('./films-page'))
const TopPage = lazy(() => import('./top-page'))
const Footer = lazy(() => import('../widgets/footer'))

export const Routing = () => {
  return (
    <div className="App">
      <Header />
      <Options />
      <Routes>
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/top" element={<TopPage />} />
        <Route path="/" element={<Navigate to="/films" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}
