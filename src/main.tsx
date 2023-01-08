import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import { App } from '@/App'
import { UserProvider } from '@/providers'

const element = document.getElementById('root') as HTMLElement
const dom = ReactDOM.createRoot(element)

dom.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
)
