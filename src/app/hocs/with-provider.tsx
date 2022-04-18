import React from 'react'
import { Provider } from 'react-redux'
import { Spinner } from '../../shared/ui/spinner'
import { store } from '../store'

const withProvider = (component: () => React.ReactNode) => () =>
  (
    <Provider store={store}>
      <React.Suspense fallback={<Spinner />}>{component()}</React.Suspense>
    </Provider>
  )

export default withProvider
