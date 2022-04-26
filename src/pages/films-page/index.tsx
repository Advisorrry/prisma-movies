import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetMoviesListQuery } from '../../shared/api/moviedb-films'
import { Card } from '../../shared/ui/card'
import { Container } from '../../shared/ui/container'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'

const Films = () => {
  const [page, setPage] = React.useState('1')
  // const [searchParams, setSearchParams] = useSearchParams()
  // const post = searchParams.get('page')

  const { data, isFetching, isError } = useGetMoviesListQuery({ category: 'popular', page: page })

  // const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   setTimeout(() => {
  //     setPage(e.target.value)
  //   }, 1000)

  //   setSearchParams({page: page})
  // }

  // console.log(isFetching)

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
          data?.results.map(({ id, poster_path, title, vote_average, release_date }) => {
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
          })
        )}
      </Layout>
    </Container>
  )
}

export default Films
