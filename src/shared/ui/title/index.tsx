import cn from 'classnames'
import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}
//#FIXME hardcode
export const Title = ({ children, className }: Props) => {
  return (
    <span className={cn('text-xl font-bold text-violet-400 tracking-widest', className)}>
      {children}
    </span>
  )
}
