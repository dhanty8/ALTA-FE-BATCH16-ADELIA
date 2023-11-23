import '../styles/index.css'

import App from '../routes'
import ReactDOM from 'react-dom/client'
import { TokenProvider } from './contexts/token'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TokenProvider>
    <App />
  </TokenProvider>,
)
