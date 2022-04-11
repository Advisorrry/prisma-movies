import cn from "classnames"
import React from 'react'

interface Props {
    children: React.ReactNode
    className?: string
  }

export const Title = ({ children, className }: Props) => {
  return (
    <span className={cn('text-xl font-bold text-indigo-700 tracking-widest', className)}>
      {children}
    </span>
  )
}


