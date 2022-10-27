import { RatingSvg } from '../../SVG/rating'

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
    <div className="text-lg mt-4">
      <div className="flex flex-col md:flex-row justify-items-start   ">
        <div className="flex items-center justify-center md:mr-9">
          <img className="w-64 h-96 rounded-lg" src={posterUrl} alt={title} />
        </div>
        <div className="mb-2 mt-2 w-full lg:w-2/3">
          <h2 className="flex text-2xl subpixel-antialiased font-bold mb-1 justify-center md:justify-start">
            {title}
          </h2>
          <div className="flex w-full sm:w-2/3 items-center justify-between mb-4">
            <span className="flex items-center font-semibold  drop-shadow-xl bg-white p-2 rounded-lg ">
              <RatingSvg margin={1} />
              <span>{rating}</span>
            </span>
            <span className="drop-shadow-xl bg-white p-2 rounded-lg">{year}</span>
            <span className="drop-shadow-xl bg-white p-2 rounded-lg">{genres[0].genre}</span>
            <span className="drop-shadow-xl bg-white p-2 rounded-lg">{runtime} м.</span>
          </div>
          <div className="text-xl w-full sm:w-2/4 drop-shadow-xl bg-white p-4 rounded-lg">
            <h5 className="my-2">Описание: </h5>
            <div className="text-xl leading-7">{shortDescription}</div>
            <div className="text-xl leading-7">{description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
