import { useParams } from 'react-router-dom'
import { Container } from '../../../shared/ui/container'
import { TopDetailsTemplate } from '../../../shared/ui/movie-details/top-details'

import { Spinner } from '../../../shared/ui/spinner'

// type Params = {
//   filmId: string
// }

export const TopDetails = () => {
  //   const { filmId } = useParams<Params>()
  //   const { data, isFetching, isError } = useGetMovieDetailsQuery({ movieId: String(filmId) })
  //   const posterImage = `${process.env.REACT_APP_IMAGE_ORIGINAL_URL}${data?.poster_path}`

  //   if (isError || !data) {
  //     return <div>Something went wrong</div>
  //   }

  //   if (isFetching) {
  //     return <Spinner />
  //   }
  return (
    <Container>
      <TopDetailsTemplate />
    </Container>
  )
}
