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
    <div className="text-lg">
      <div className="flex flex-col md:flex-row justify-items-start   ">
        <div className="flex items-center justify-center md:mr-9">
          <img className="w-64 h-96 rounded-lg" src={posterPath} alt={name} />
        </div>
        <div className="mb-2 mt-2 w-full lg:w-2/3">
          <h2 className="text-2xl subpixel-antialiased font-bold mb-1 justify-center">{name}</h2>
          <div className="flex w-full sm:w-2/3 items-center justify-between">
            <span className="font-semibold">Рейтинг: {rating}</span>
            <span>{genre?.[0].name}</span>
            <span>Сезонов: {numberOfSeasons}</span>
          </div>
          <div className="flex flex-col">
            <span>Первый эпизод: {firstAirDate}</span>
            <span>Последний эпизод: {lastAirDate}</span>
          </div>
          <div className="text-xl w-full sm:w-3/4">
            <h5 className="my-2">Описание: </h5>
            <div className="text-xl leading-7">{overview}</div>
          </div>
        </div>
      </div>
    </div>
  )
}