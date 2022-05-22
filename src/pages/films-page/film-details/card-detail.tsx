import cn from 'classnames'
import styles from './film-details.module.scss'

interface Genres {
  id: number
  name: string
}
interface Props {
  posterPath: string | undefined
  rating: number | undefined
  date: string | undefined
  genre?: { id: number; name: string }[] | undefined
  budget: number | undefined
  revenue: number | undefined
  overview: string | undefined
  runtime: number | undefined
  title: string | undefined
}

export const CardDetail = ({
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
    <div className={cn(styles.screen, 'text-lg')}>
      <div className="flex flex-col md:flex-row justify-items-start   ">
        <div className="flex items-center justify-center xl:mr-9">
          <img className="w-64 h-96 rounded-lg" src={posterPath} alt="123" />
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
        </div>
      </div>
      <div className="text-xl w-full md:w-1/2 sm:w-3/4">
        <h5>Описание: </h5>
        <div className="mt-2 text-xl leading-7">{overview}</div>
      </div>
    </div>
  )
}
