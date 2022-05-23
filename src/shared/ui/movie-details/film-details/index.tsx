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
          <h2 className="text-2xl subpixel-antialiased font-bold mb-1 justify-center">{title}</h2>
          <div className="flex w-full sm:w-2/3 items-center justify-between">
            <span className="font-semibold">Рейтинг: {rating}</span>
            <span>{date}</span>
            <span>{genre?.[0].name}</span>
            <span>{runtime} м.</span>
          </div>
          <div className="flex flex-col">
            <span>бюджет: ${budget?.toLocaleString('ru')}</span>
            <span>сборы: ${revenue?.toLocaleString('ru')}</span>
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
