import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

const withProvider = (component: () => React.ReactNode) => () =>
  (
    <Provider store={store}>
      <React.Suspense fallback={`loading...`}>{component()}</React.Suspense>
    </Provider>
  )

export default withProvider