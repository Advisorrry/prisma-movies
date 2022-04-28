import React from 'react'
import { useGetTop250Query } from '../../shared/api/kinopoisk-movies'
import { CardKinopoisk } from '../../shared/ui/card-kinopoisk'
import { Container } from '../../shared/ui/container'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'

const TopFilms = () => {
  const { data, isFetching, isError } = useGetTop250Query({ page: '1' })
  

  if (isError) {
    return (
      <Layout>Ошибка при загрузки данных. Попробуйте включить VPN и перезагрузить страницу</Layout>
    )
  }

  return (
    <Container>
      <Layout>
        {isFetching ? (
          <Spinner />
        ) : (
          data?.films.map(({ filmId, nameRu, posterUrlPreview, rating, year }) => {
            return (
              <CardKinopoisk
                key={filmId}
                id={filmId}
                rating={rating}
                posterPath={posterUrlPreview}
                date={year}>
                {nameRu}
              </CardKinopoisk>
            )
          })
        )}
      </Layout>
    </Container>
  )
}

export default TopFilms
