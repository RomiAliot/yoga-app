// components
import { Header } from './components/header'

// pages
import { Home } from './pages/home'

import { PosesContextProvider } from './context'
import './App.css'

function App() {
  return (
    <PosesContextProvider >
      <Header />
      <Home />
    </PosesContextProvider>
  )
}

export default App
