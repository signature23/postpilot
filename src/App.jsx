import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Thousand from './components/Thousand'
import Crazy from './components/Crazy'
import PostMake from './components/PostMake'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Thousand/>
      <Crazy/>
      <PostMake/>
    </>
  )
}

export default App
