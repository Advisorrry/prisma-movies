import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetTop250Query } from '../../shared/api/kinopoisk-movies'
import { CardKinopoisk } from '../../shared/ui/card-kinopoisk'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'
import { Pagination } from '../../widgets/pagination'

const TopFilms = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageQuery = searchParams.get('page')

  const [page, setPage] = useState<number>(Number(pageQuery) || 1)

  const { data, isFetching, isError } = useGetTop250Query({ page: page })

  useEffect(() => {
    const params = Object.fromEntries([...searchParams])
    console.log('Mounted:', params)

    setSearchParams({ page: String(page) })
  }, [searchParams, page, setSearchParams])

  if (isError) {
    return (
      <Layout>Ошибка при загрузки данных. Попробуйте включить VPN и перезагрузить страницу</Layout>
    )
  }
  if (isFetching) {
    return <Spinner />
  }

  return (
    <>
      <Layout>
        {data?.films.map(({ filmId, nameRu, posterUrlPreview, rating, year }) => {
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
        })}
      </Layout>
      <Pagination currentPage={page} totalPages={13} setPage={setPage} />
    </>
  )
}

export default TopFilms
