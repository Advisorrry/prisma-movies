import cn from 'classnames'
import React from 'react'
import { Container } from '../../shared/ui/container'
import styles from 'options.module.scss'
import { Genre } from './genre'
import { Catecory } from './catecory'

export const Options = () => {
  return (
    <Container>
      <main className="flex justify-between">
        <Genre />
        <Catecory />
      </main>
    </Container>
  )
}
