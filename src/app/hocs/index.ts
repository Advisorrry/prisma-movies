import {compose} from 'redux'
import withRouter from './with-router'
import withProvider from './with-provider'

export const withHocs = compose(withProvider, withRouter)
