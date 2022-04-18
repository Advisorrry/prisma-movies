import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Spinner } from '../../shared/ui/spinner'

const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <React.Suspense fallback={<Spinner />}>{component()}</React.Suspense>
    </BrowserRouter>
  )

export default withRouter
