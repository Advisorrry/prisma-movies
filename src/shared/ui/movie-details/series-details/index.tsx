import { RatingSvg } from '../../SVG/rating'

interface Props {
  overview: string
  posterPath: string
  firstAirDate: string
  lastAirDate: string
  name: string
  rating: number
  genre?: { id: number; name: string }[]
  numberOfSeasons: number
}

export const SeriesDetailsTemplate = ({
  posterPath,
  rating,
  firstAirDate,
  lastAirDate,
  genre,
  overview,
  name,
  numberOfSeasons,
}: Props) => {
  return (
    <div className="text-lg mt-4">
      <div className="flex flex-col md:flex-row justify-items-start">
        <div className="flex items-center justify-center md:mr-9">
          <img className="w-64 h-96 rounded-lg" src={posterPath} alt={name} />
        </div>
        <div className="mb-2 mt-2 w-full lg:w-2/3">
          <h2 className="flex text-2xl subpixel-antialiased font-bold mb-1 justify-center">
            {name}
          </h2>
          <div className="flex sm:w-2/3 items-center justify-between mb-4">
            <span className="flex items-center font-semibold  drop-shadow-xl bg-white p-2 rounded-lg ">
              <RatingSvg margin={1} />
              <span>{rating}</span>
            </span>
            <span className="drop-shadow-xl bg-white p-2 rounded-lg">{genre?.[0].name}</span>
            <span className="drop-shadow-xl bg-white p-2 rounded-lg">
              сезонов: {numberOfSeasons}
            </span>
          </div>
          <div className="inline-block mb-4">
            <div className="drop-shadow-xl bg-white p-2 rounded-lg mb-2">
              Первый эпизод: {firstAirDate}
            </div>
            <div className="drop-shadow-xl bg-white p-2 rounded-lg">
              Последний эпизод: {lastAirDate}
            </div>
          </div>
          <div className="text-xl w-full sm:w-3/4 drop-shadow-xl bg-white p-4 rounded-lg">
            <h5 className="my-2">Описание: </h5>
            <div className="text-xl leading-7">{overview}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
