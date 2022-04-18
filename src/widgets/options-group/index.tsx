//import cn from 'classnames'
import React from 'react'
import { Container } from '../../shared/ui/container'
//import styles from './options.module.scss'
import { Genre } from './genre'
import { Catecory } from './catecory'
import { Burger } from '../burger-menu'

export const Options = () => {
  const [open, setOpen] = React.useState(false)

  const handleClick = React.useCallback(() => {
    return setOpen(!open)
  }, [open])
  return (
    <Container>
      <main className="flex justify-between px-2 md:px-0">
        <Genre handleClick={handleClick} />
        <Catecory />
      </main>
      {open ? <Burger /> : ''}
    </Container>
  )
}
