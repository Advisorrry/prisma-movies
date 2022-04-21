import React from 'react'
import { Layout } from '../../shared/ui/layout/layout'

const Series = () => {
  return (
    <div>
      <Layout>
        сериалы
        {/* {data?.results.map(({ id, poster_path, title, vote_average }) => {
          return (
            <Card key={id} id={id} rating={vote_average} posterPath={poster_path}>
              {title}
            </Card>
          )
        })} */}
      </Layout>
    </div>
  )
}

export default Series
