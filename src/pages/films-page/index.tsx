import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetMoviesListQuery } from '../../shared/api/moviedb-films'
import { Category } from '../../shared/api/moviedb-films/types'
import { Card } from '../../shared/ui/card'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'
import { Pagination } from '../../widgets/pagination'

const Films = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageQuery = searchParams.get('page')
  const categoryQuery = searchParams.get('category')

  const [page, setPage] = useState<number>(Number(pageQuery) || 1)
  const [category, setcategory] = useState<Category | string>(
    String(categoryQuery) === 'null' ? Category.POPULAR : String(categoryQuery),
  )

  const { data, isFetching, isError } = useGetMoviesListQuery({
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
  if (isFetching) {
    return <Spinner />
  }
  return (
    <>
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

      <Pagination setPage={setPage} totalPages={50} currentPage={page} />
    </>
  )
}

export default Films
