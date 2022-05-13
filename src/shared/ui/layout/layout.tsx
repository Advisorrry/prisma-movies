import cn from 'classnames'
import React from 'react'
import { Container } from '../container'
import styles from './layout.module.scss'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <div
        className={cn(
          styles.root,
          'grid justify-items-center mx-auto mt-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 xs:gap-6 xl:gap-10',
        )}>
        {children}
      </div>
    </Container>
  )
}
