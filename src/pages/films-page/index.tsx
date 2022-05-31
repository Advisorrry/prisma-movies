import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetMoviesListQuery } from '../../shared/api/moviedb-films'
import { Category } from '../../shared/api/moviedb-films/types'
import { CategoryGroup } from '../../widgets/category'
import { Card } from '../../shared/ui/card'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'
import { Footer } from '../../widgets/footer'
import { Pagination } from '../../widgets/pagination'

const Films = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageQuery = searchParams.get('page')
  const categoryQuery = searchParams.get('category')

  const [page, setPage] = useState<number>(Number(pageQuery) || 1)
  const [category, setCategory] = useState<Category | string>(
    String(categoryQuery) === 'null' ? Category.POPULAR : String(categoryQuery),
  )

  const { data, isFetching, isError } = useGetMoviesListQuery({
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
  if (isFetching) {
    return <Spinner />
  }
  return (
    <>
      <CategoryGroup items={actions} setCategory={setCategory} category={category} page={'film'} />
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
      <Footer />
    </>
  )
}

const actions = [
  { name: 'сейчас смотрят', cat: Category.NOW_PLAYING },
  { name: 'популярные', cat: Category.POPULAR },
  { name: 'лучшие', cat: Category.TOP_RATED },
]
export default Films
