import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../shared/ui/container'
import styles from './styles.module.scss'

export const Header = () => {
  const categories = ['films', 'serials', 'favorites']

  return (
    <Container>
      <header className="flex py-2">
        <div className="flex font-mono px-2 text-xl font-semibold tracking-wider	text-teal-500">
          <Link to="/">prisma_movie</Link>
        </div>
        <div className={cn(styles.root, 'flex font-semibold')}>
          <ul>
            {categories.map((ct, idx) => (
              <li key={idx}>
                <Link to={ct}>{ct}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </Container>
  )
}
