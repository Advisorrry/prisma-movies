import { useParams } from 'react-router-dom'
import { Container } from '../../../shared/ui/container'
import { Spinner } from '../../../shared/ui/spinner'
import { useGetTvDetailsQuery } from '../../../shared/api/moviedb-tv'
import { SeriesDetailsTemplate } from '../../../shared/ui/movie-details/series-details'

type Params = {
  tvId: string
}

export const SeriesDetails = () => {
  const { tvId } = useParams<Params>()

  const { data, isFetching, isError } = useGetTvDetailsQuery({ tvId: String(tvId) })
  const posterImage = `${process.env.REACT_APP_IMAGE_ORIGINAL_URL}${data?.poster_path}`
  console.log(data)

  if (isError || !data) {
    return <div>Something went wrong</div>
  }

  if (isFetching) {
    return <Spinner />
  }
  return (
    <>
      <Container>
        <SeriesDetailsTemplate
          firstAirDate={data.first_air_date}
          lastAirDate={data.last_air_date}
          name={data.name}
          numberOfSeasons={data.number_of_seasons}
          overview={data.overview}
          posterPath={posterImage}
          rating={data.vote_average}
          genre={data.genres}
        />
      </Container>
    </>
  )
}
