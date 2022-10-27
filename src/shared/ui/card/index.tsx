import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import dayjs from 'dayjs'
import cn from 'classnames'
import styles from './card.module.scss'
import { RatingSvg } from '../SVG/rating'

interface Props {
  children: ReactNode
  rating: number
  id: number
  posterPath: string
  date: string
}

export const Card = ({ children, rating, posterPath, id, date }: Props) => {
  const posterImage = `${process.env.REACT_APP_IMAGE_W500_URL}${posterPath}`

  const dateFormat = dayjs(date).format('DD MMM YYYY')

  return (
    <div
      className={cn(
        styles.mw,
        'flex flex-wrap bg-white duration-200 rounded-xl shadow-lg drop-shadow-xl',
      )}>
      <div className={cn(styles.root, 'p-2')}>
        <Link to={String(id)}>
          <img alt={String(children)} src={posterImage} className="rounded-lg" />
        </Link>
      </div>

      <div className="px-3 py-4 whitespace-normal min-h-min">
        <span className="mb-2 flex items-center text-base md:text-xl font-bold tracking-tight text-gray-900">
          <RatingSvg margin={2} />
          <span>{rating}</span>
        </span>
        <div className="flex flex-wrap justify-start break-words">
          <span className="w-full font-semibold text-lg duration-200 text-gray-700 hover:text-gray-900">
            <Link to={String(id)}>
              <span>{children}</span>
            </Link>
          </span>
          <span className="font-normal text-sm left-0 text-neutral-700">
            <div>{dateFormat}</div>
          </span>
        </div>
      </div>
    </div>
  )
}
