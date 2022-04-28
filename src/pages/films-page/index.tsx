import { useCallback, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetMoviesListQuery } from '../../shared/api/moviedb-films'
import { Card } from '../../shared/ui/card'
import { Container } from '../../shared/ui/container'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'
import { Pagination } from '../../widgets/pagination'

const Films = () => {
  const [page, setPage] = useState<number>(1)
  const { data, isFetching, isError } = useGetMoviesListQuery({ category: 'popular', page: page })

  const currentPage = (c: number) => {
    return setPage(c)
  }

  if (isError)
    return (
      <Layout>Ошибка при загрузки данных. Попробуйте включить VPN и перезагрузить страницу</Layout>
    )
  return (
    <Container>
      {isFetching ? (
        <Spinner />
      ) : (
        <Layout>
          {data?.results.map(({ id, poster_path, title, vote_average, release_date }) => {
            return (
              <Card
                key={id}
                id={id}
                rating={vote_average}
                posterPath={poster_path}
                date={release_date}>
                {title}
              </Card>
            )
          })}
        </Layout>
      )}
      <Pagination setPage={currentPage} totalPages={50} currentPage={page} />
    </Container>
  )
}

export default Films
