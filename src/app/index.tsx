import { Routing } from '../pages'
import { withHocs } from './hocs'
import './styles/index.scss'

const App = () => <Routing />

export default withHocs(App)
