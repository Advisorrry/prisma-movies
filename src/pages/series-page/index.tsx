import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetTvListQuery } from '../../shared/api/moviedb-tv'
import { Category } from '../../shared/api/moviedb-tv/types'
import { Card } from '../../shared/ui/card'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'
import { CategoryGroup } from '../../widgets/category'
import { Footer } from '../../widgets/footer'
import { Pagination } from '../../widgets/pagination'

const Series = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageQuery = searchParams.get('page')
  const categoryQuery = searchParams.get('category')

  const [page, setPage] = useState<number>(Number(pageQuery) || 1)
  const [category, setCategory] = useState<Category | string>(
    String(categoryQuery) === 'null' ? Category.TOP_RATED : String(categoryQuery),
  )

  const { data, isFetching, isError } = useGetTvListQuery({
    category: category,
    page: page,
  })

  useEffect(() => {
    setSearchParams({ page: String(page), category: category })
  }, [searchParams, page, category, setSearchParams])

  if (isError)
    return (
      <Layout>Ошибка при загрузки данных. Попробуйте включить VPN и перезагрузить страницу</Layout>
    )
  if (isFetching) return <Spinner />
  return (
    <>
      <CategoryGroup items={actions} setCategory={setCategory} category={category} page={'tv'} />
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

      <Pagination setPage={setPage} totalPages={50} currentPage={page} />
      <Footer />
    </>
  )
}

const actions = [
  { name: 'популярные', cat: Category.POPULAR },
  { name: 'лучшие', cat: Category.TOP_RATED },
  { name: 'в эфире', cat: Category.AIRING_TODAY },
]

export default Series
