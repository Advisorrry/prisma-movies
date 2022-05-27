import { useParams } from 'react-router-dom'
import { useGetTop250DetailsQuery } from '../../../shared/api/kinopoisk-movies'
import { Container } from '../../../shared/ui/container'
import { TopDetailsTemplate } from '../../../shared/ui/movie-details/top-details'

import { Spinner } from '../../../shared/ui/spinner'

type Params = {
  filmId: string
}

export const TopDetails = () => {
  const { filmId } = useParams<Params>()
  const { data, isFetching, isError } = useGetTop250DetailsQuery({ filmId: String(filmId) })

  if (isFetching || !data) {
    return <Spinner />
  }
  if (isError) {
    return <div>Something went wrong</div>
  }

  return (
    <Container>
      <TopDetailsTemplate
        title={data.nameRu}
        genres={data.genres}
        posterUrl={data.posterUrl}
        year={data.year}
        rating={data.ratingKinopoisk}
        description={data.description}
        shortDescription={data.shortDescription}
        runtime={data.filmLength}
      />
    </Container>
  )
}
