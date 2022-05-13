import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '../../shared/ui/container'
import styles from './styles.module.scss'

export const Header = () => {
  const loc = useLocation()

  const actions = [
    {
      id: 'films',
      label: 'фильмы',
      url: '/films',
    },
    {
      id: 'serials',
      label: 'сериалы',
      url: '/series',
    },
    {
      id: 'fav',
      label: 'избранное',
      url: '/favorites',
    },
    {
      id: 'top',
      label: 'топ',
      url: '/top',
    },
  ]

  return (
    <Container>
      <header className="flex items-center justify-center flex-wrap bg-teal sm:justify-between ">
        <div className="font-mono text-xl font-semibold tracking-wider text-teal-500">
          <Link to="/films">prisma_movies</Link>
        </div>
        <nav className={cn(styles.root, 'flex font-semibold text-xl lg:text-lg')}>
          {actions.map(({ id, label, url }) => (
            <Link to={url} className="mr-3  md:mr-10 last:mr-0" key={id}>
              <div className={loc.pathname === url ? styles.underline : null}>
                <span>{label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </header>
    </Container>
  )
}
