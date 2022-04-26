import React from 'react'
import { useGetTvListQuery } from '../../shared/api/moviedb-tv'
import { Card } from '../../shared/ui/card'
import { Container } from '../../shared/ui/container'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'

const Series = () => {
  const { data, isFetching, isError } = useGetTvListQuery({ category: 'top_rated', page: '1' })

  if (isError)
    return (
      <Layout>Ошибка при загрузки данных. Попробуйте включить VPN и перезагрузить страницу</Layout>
    )
  return (
    <Container>
      <Layout>
        {isFetching ? (
          <Spinner />
        ) : (
          data?.results.map(({ id, poster_path, name, vote_average, first_air_date }) => {
            return (
              <Card
                key={id}
                id={id}
                rating={vote_average}
                posterPath={poster_path}
                date={first_air_date}>
                {name}
              </Card>
            )
          })
        )}
      </Layout>
    </Container>
  )
}

export default Series
