import { Header } from './components/components.js'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-950 text-white py-8 px-16 flex flex-col justify-start items-center">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
