interface Props {
  genres: {
    genre: string
  }[]
  title: string
  posterUrl: string
  year: string
  rating: number
  description: string
  shortDescription: string
  runtime: number
}

export const TopDetailsTemplate = ({
  genres,
  title,
  posterUrl,
  year,
  rating,
  description,
  shortDescription,
  runtime,
}: Props) => {
  return (
    <div className="text-lg">
      <div className="flex flex-col md:flex-row justify-items-start   ">
        <div className="flex items-center justify-center md:mr-9">
          <img className="w-64 h-96 rounded-lg" src={posterUrl} alt={title} />
        </div>
        <div className="mb-2 mt-2 w-full lg:w-2/3">
          <h2 className="flex text-2xl subpixel-antialiased font-bold mb-1 justify-center md:justify-start">
            {title}
          </h2>
          <div className="flex w-full sm:w-2/3 items-center justify-between">
            <span className="font-semibold">Рейтинг: {rating}</span>
            <span>{year}</span>
            <span>{genres[0].genre}</span>
            <span>{runtime} м.</span>
          </div>
          {/* <div className="flex flex-col">
            <span>бюджет: ${budget?.toLocaleString('ru')}</span>
            <span>сборы: ${revenue?.toLocaleString('ru')}</span>
          </div> */}
          <div className="text-xl w-full sm:w-3/4">
            <h5 className="my-2">Описание: </h5>
            <div className="text-xl leading-7">{shortDescription}</div>
            <div className="text-xl leading-7">{description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
