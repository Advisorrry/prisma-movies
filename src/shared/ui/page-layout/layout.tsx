import React from 'react'
import { Container } from '../container'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <div className="grid justify-items-center mx-auto mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xl:gap-16">
        {children}
      </div>
    </Container>
  )
}

export default Layout
