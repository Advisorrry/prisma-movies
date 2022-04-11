import cn from 'classnames'
import React from 'react'
import { Container } from '../container'
import styles from 'layout.module.scss'
import { useGetFilmsByGenreQuery } from '../../api/kinopoisk-movies'
import { LayoutLeft } from './layout-left'
import { Title } from '../title'

export const Layout = () => {
  const [selectedGenre, setSelectedGenre] = React.useState<number>(1)

  // const onSelectedGenre = (id: number) => {
  //   setSelectedGenre(id)
  // }
  console.log(selectedGenre)

  // const { data, isFetching } = useGetFilmsByGenreQuery({ genre: selectedGenre, page: 1 })
  // console.log(data)

  return (
    <Container>
      <main className="flex flex-row my-0 mx-auto">
        <LayoutLeft />
        <div className="">
          <Title>популярные</Title>
          <div>{'isFetching  ? загрузка : data?.items[2].nameRu'}</div>
          <div>{}</div>
          <div>311</div>
        </div>
      </main>
    </Container>
  )
}
