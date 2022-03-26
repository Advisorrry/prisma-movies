import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../shared/ui/container'
import styles from './styles.module.scss'

export const Header = () => {
  const actions = [
    {
      id: 'films',
      label: 'фильмы',
      url: '/films',
    },
    {
      id: 'serials',
      label: 'сериалы',
      url: '/serials',
    },
    {
      id: 'fav',
      label: 'избранное',
      url: '/favorites',
    },
    {
      id: 'top',
      label: 'топ 250',
      url: '/top',
    },
  ]

  return (
    <Container>
      <header className="flex py-2">
        <div className="flex font-mono px-2 text-xl font-semibold tracking-wider	text-teal-500">
          <Link to="/">prisma_movie</Link>
        </div>
        <div className={cn(styles.root, 'flex font-semibold')}>
          <ul>
            {actions.map(({ id, label, url }) => (
              <li key={id}>
                <Link to={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </Container>
  )
}
