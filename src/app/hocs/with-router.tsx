import React from 'react'
import { BrowserRouter} from 'react-router-dom'

const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <React.Suspense fallback={`loading...`}>{component()}</React.Suspense>
    </BrowserRouter>
  )

export default withRouter
