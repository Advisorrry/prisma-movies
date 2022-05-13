import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import dayjs from 'dayjs'
import cn from 'classnames'
import styles from './card.module.scss'

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
    <div className="flex flex-wrap bg-white duration-200 rounded-xl shadow-lg drop-shadow-xl">
      <div className={cn(styles.root, 'p-2')}>
        <Link to={String(id)}>
          <img alt={String(children)} src={posterImage} className="rounded-lg" />
        </Link>
      </div>

      <div className="px-3 py-5 whitespace-normal min-h-min">
        <span className="mb-2 flex items-center text-base md:text-xl font-bold tracking-tight text-gray-900">
          <Svg />
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

const Svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  )
}
