import cn from 'classnames'
import React from 'react'
import { Burger } from '../../../widgets/burger-menu'
import { Title } from '../../../shared/ui/title'
import styles from './layout-left.module.scss'

export const Genre = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="">
      <div onClick={() => setOpen(!open)}>
        <Title className="pl-3">жанр</Title>
      </div>
      {open ? <Burger /> : <></>}
    </div>
  )
}
