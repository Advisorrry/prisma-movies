import React from 'react'
import { useGetMoviesListQuery } from '../../shared/api/moviedb-films'
import { Card } from '../../shared/ui/card'
import { Container } from '../../shared/ui/container'
import { Layout } from '../../shared/ui/layout/layout'

const Films = () => {
  const { data } = useGetMoviesListQuery({ category: 'popular', page: 1 })
  return (
    <Container>
      <Layout>
        {data?.results.map(({ id, poster_path, title, vote_average }) => {
          return (
            <Card key={id} id={id} rating={vote_average} posterPath={poster_path}>
              {title}
            </Card>
          )
        })}
      </Layout>
    </Container>
  )
}

export default Films
