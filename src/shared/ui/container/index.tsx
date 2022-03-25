import React from 'react'

interface Props {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return <div className="container lg mx-auto antialiased">{children}</div>
}
