import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar/Navbar'
import PriceList from './component/PriceList/PriceList'
import DashBoard from './component/DashBoard/DashBoard'
import PhoneBar from './component/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-5xl text-blue-600 font-bold'>Hello from nav!!!</h1>
      <div className='md:mx-24'>
      <PriceList></PriceList>
      </div>
      <DashBoard></DashBoard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
