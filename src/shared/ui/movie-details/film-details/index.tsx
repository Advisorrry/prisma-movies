interface Props {
  posterPath: string
  rating: number
  date: string
  genre?: { id: number; name: string }[]
  budget: number
  revenue: number
  overview: string
  runtime: number
  title: string
}

export const FilmDetailsTemplate = ({
  posterPath,
  rating,
  date,
  genre,
  budget,
  revenue,
  overview,
  runtime,
  title,
}: Props) => {
  return (
    <div className="text-lg">
      <div className="flex flex-col md:flex-row justify-items-start   ">
        <div className="flex items-center justify-center md:mr-9">
          <img className="w-64 h-96 rounded-lg" src={posterPath} alt={title} />
        </div>
        <div className="mb-2 mt-2 w-full lg:w-2/3">
          <h2 className="flex text-2xl subpixel-antialiased font-bold mb-1 justify-center">
            {title}
          </h2>
          <div className="flex w-full sm:w-2/3 items-center justify-between mb-4">
            <span className="font-semibold drop-shadow-xl bg-white p-2 rounded-lg">
              рейтинг: {rating}
            </span>
            <span className="drop-shadow-xl bg-white p-2 rounded-lg">{date}</span>
            <span className="drop-shadow-xl bg-white p-2 rounded-lg">{genre?.[0].name}</span>
            <span className="drop-shadow-xl bg-white p-2 rounded-lg">{runtime} м.</span>
          </div>
          <div className="inline-block mb-4">
            <div className="drop-shadow-xl bg-white p-2 rounded-lg mb-2">
              бюджет: ${budget?.toLocaleString('ru')}
            </div>
            <div className="drop-shadow-xl bg-white p-2 rounded-lg">
              сборы: ${revenue?.toLocaleString('ru')}
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
