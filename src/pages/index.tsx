import React from 'react'
import { useGetFilmsByGenreQuery } from '../shared/api/kinopoisk-movies'
import { Header } from '../widgets/header'

export const Example = () => {
  // const { data } = useGetFilmsByGenreQuery({ genre: 1, page: 1 })

  // console.log(data)

  return (
    <div className="App">
      <Header />
    </div>
  )
}
