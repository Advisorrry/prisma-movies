import React from 'react'
import styles from './burger.module.scss'

export const Burger = () => {
  return (
    <div className={styles.root}>
      <div className={styles.burger__dropdown}>
        <nav className={styles.burger_nav_menu}>
          <ul className="w-full">
            {genres.map(({ title, emoji, genre_id }) => {
              return (
                <li
                  key={genre_id}
                  className={
                    'rounded-full text-xl flex-wrap hover:shadow-md p-3 mb-2 hover:bg-purple-300 focus:bg-purple-400 text-left transition duration-150 ease-in-out cursor-pointer'
                  }>
                  <div className={styles.list_item_content}>
                    <div className="text-lg leading-6 font-medium">
                      <span className="mr-4 w-6 h-6">{emoji}</span>
                      <span>{title}</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
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
