import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetTvListQuery } from '../../shared/api/moviedb-tv'
import { Category } from '../../shared/api/moviedb-tv/types'
import { Card } from '../../shared/ui/card'
import { Container } from '../../shared/ui/container'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'
import { Pagination } from '../../widgets/pagination'

const Series = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageQuery = searchParams.get('page')
  const categoryQuery = searchParams.get('category')

  const [page, setPage] = useState<number>(Number(pageQuery) || 1)
  const [category] = useState<Category | string>(
    String(categoryQuery) === 'null' ? Category.TOP_RATED : String(categoryQuery),
  )

  const { data, isFetching, isError } = useGetTvListQuery({
    category: category,
    page: page,
  })

  useEffect(() => {
    const params = Object.fromEntries([...searchParams])
    console.log('Mounted:', params)

    setSearchParams({ page: String(page), category: category })
  }, [searchParams, page, category, setSearchParams])

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
          {data?.results.map(({ id, poster_path, name, vote_average, first_air_date }) => {
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
          })}
        </Layout>
      )}
      <Pagination setPage={setPage} totalPages={50} currentPage={page} />
    </Container>
  )
}

export default Series
