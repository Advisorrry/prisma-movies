import React from 'react'
import { useGetMoviesListQuery } from '../../shared/api/moviedb-films'
import { Card } from '../../shared/ui/card'
import { Container } from '../../shared/ui/container'
import { Layout } from '../../shared/ui/layout/layout'
import { Spinner } from '../../shared/ui/spinner'

const Films = () => {
  const [page, setPage] = React.useState('1')
  const { data, isFetching } = useGetMoviesListQuery({ category: 'popular', page: page })

  // const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTimeout(() => {
  //     setPage(e.target.value)
  //   }, 1000)
  //   console.log(e.target.value)
  // }

  // console.log(isFetching)

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

// const Skeleton = () => {
//   return (Array(10).fill(0).map((_, idx) => <Spinner key={idx} />)})
// }

export default Films
