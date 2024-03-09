import { useState } from 'react'
import Header from './components/Header/Header'
import Carousel from './components/Adv/Carousel'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Menu/>
    </>
  )
}

export default App
