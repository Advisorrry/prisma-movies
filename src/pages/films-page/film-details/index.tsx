import { useParams } from 'react-router-dom'
import { Container } from '../../../shared/ui/container'
import { useGetMovieDetailsQuery } from '../../../shared/api/moviedb-films'
import { Spinner } from '../../../shared/ui/spinner'
import { FilmDetailsTemplate } from '../../../shared/ui/movie-details/film-details'

type Params = {
  filmId: string
}

export const FilmDetails = () => {
  const { filmId } = useParams<Params>()
  const { data, isFetching, isError } = useGetMovieDetailsQuery({ movieId: String(filmId) })
  const posterImage = `${process.env.REACT_APP_IMAGE_ORIGINAL_URL}${data?.poster_path}`

  if (isError || !data) {
    return <div>Something went wrong</div>
  }

  if (isFetching) {
    return <Spinner />
  }
  return (
    <>
      <Container>
        {
          <FilmDetailsTemplate
            budget={data.budget}
            posterPath={posterImage}
            title={data.title}
            date={data.release_date}
            overview={data.overview}
            rating={data.vote_average}
            runtime={data.runtime}
            genre={data.genres}
            revenue={data.revenue}
          />
        }
      </Container>
    </>
  )
}
