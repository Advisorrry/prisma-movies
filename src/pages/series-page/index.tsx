import React from 'react'
import { useGetTvListQuery } from '../../shared/api/moviedb-tv'
import { usePagination } from '../../shared/lib/hooks'
import { Card } from '../../shared/ui/card'
import { Container } from '../../shared/ui/container'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'
import { Pagination } from '../../widgets/pagination'

const Series = () => {
  // const { setPage, totalPages, currentPage } = usePagination(50, 1)

  const { data, isFetching, isError } = useGetTvListQuery({
    category: 'top_rated',
    page: 1,
  })

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
      {/* <Pagination setPage={setPage} totalPages={totalPages} currentPage={currentPage} /> */}
    </Container>
  )
}

export default Series
