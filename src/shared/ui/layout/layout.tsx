import cn from 'classnames'
import React from 'react'
import { Container } from '../container'
import styles from 'layout.module.scss'

interface Props {
  children: React.ReactNode
}

const genres = [
  {
    id: 1,
    title: 'комедия',
    genre_id: 13,
    emoji: '😄',
  },
  {
    id: 2,
    title: 'триллер',
    genre_id: 1,
    emoji: '🪓',
  },
  {
    id: 3,
    title: 'драма',
    genre_id: 2,
    emoji: '😢',
  },
  {
    id: 4,
    title: 'криминал',
    genre_id: 3,
    emoji: '💰',
  },
  {
    id: 5,
    title: 'детектив',
    genre_id: 5,
    emoji: '🔍',
  },
  {
    id: 6,
    title: 'фантастика',
    genre_id: 6,
    emoji: '💫',
  },
  {
    id: 7,
    title: 'мультфильм',
    genre_id: 12,
    emoji: '🧸',
  },
  {
    id: 8,
    title: 'боевик',
    genre_id: 11,
    emoji: '💥',
  },
  {
    id: 9,
    title: 'мелодрама',
    genre_id: 4,
    emoji: '💛',
  },
]

export const Layout = () => {
  return (
    <Container>
      <main className="flex flex-row my-0 mx-auto">
        <div className="mr-24">
          <Title>Жанр</Title>
          <ul className="mt-7 text-lg items-center">
            {genres.map(({ id, title, emoji }) => {
              return (
                <li
                  tabIndex={1}
                  key={id}
                  className="rounded-full hover:shadow-md p-3 mb-2 hover:bg-purple-400 focus:bg-purple-400 text-left transition duration-150 ease-in-out cursor-pointer">
                  <span className="text-xl">{emoji}</span> <span>{title}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="">
          <Title>Популярные</Title>
          <div>311</div>
          <div>311</div>
          <div>311</div>
        </div>
      </main>
    </Container>
  )
}

const Title = ({ children }: Props) => {
  return <span className="text-xl font-bold text-indigo-700 tracking-widest">{children}</span>
}
