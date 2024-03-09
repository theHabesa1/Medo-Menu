import { useState } from 'react'
import Header from './components/Header/Header'
import Carousel from './components/Adv/Carousel'
import Menu from './components/Menu/Menu'
import PictureSlider from './components/Adv/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <PictureSlider/>
     <Menu/>
    </>
  )
}

export default App
