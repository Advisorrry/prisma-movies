import cn from 'classnames'
import React from 'react'
import { Title } from '../../title'
import styles from './layout-left.module.scss'

export const LayoutLeft = () => {

  const [open, setOpen] = React.useState(true)  

  return (
    <div className="mr-24">
      <div className={cn(styles.unselectable,'flex items-center cursor-pointer transition duration-300 ease-in-out')} onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      <Title className="pl-3">жанр</Title>
      </div>
      {open ? <Genres /> : <></>}
    </div>
  )
}

const Genres = () => {
  return (
    <ul className="mt-10 text-lg items-center">
        {genres.map(({ title, emoji, genre_id }) => {
          return (
            <li
              tabIndex={1}
              key={genre_id}
              className={cn(
                'rounded-full w-44 text-xl flex-wrap hover:shadow-md p-3 mb-2 hover:bg-purple-300 focus:bg-purple-400 text-left transition duration-150 ease-in-out cursor-pointer',
              )}>
              <span className="text-xl mr-1">{emoji}</span> <span>{title}</span>
            </li>
          )
        })}
      </ul>
  )
}

const genres = [
  {
    id: 0,
    title: 'комедия',
    genre_id: 13, // id жанра в апишки кинопоиска, в данном случае -- комедия
    emoji: '😄',
  },
  {
    id: 1,
    title: 'триллер',
    genre_id: 1,
    emoji: '🪓',
  },
  {
    id: 2,
    title: 'драма',
    genre_id: 2,
    emoji: '😢',
  },
  {
    id: 3,
    title: 'криминал',
    genre_id: 3,
    emoji: '💰',
  },
  {
    id: 4,
    title: 'детектив',
    genre_id: 5,
    emoji: '🔍',
  },
  {
    id: 5,
    title: 'фантастика',
    genre_id: 6,
    emoji: '💫',
  },
  {
    id: 6,
    title: 'мультфильм',
    genre_id: 12,
    emoji: '🧸',
  },
  {
    id: 7,
    title: 'боевик',
    genre_id: 11,
    emoji: '💥',
  },
  {
    id: 8,
    title: 'мелодрама',
    genre_id: 4,
    emoji: '💛',
  },
]


