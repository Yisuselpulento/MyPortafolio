import { Home } from './components/Home.jsx'
import { Navbar } from './components/Navbar.jsx'

export default function App () {
  return (
    <div className='h-scren h-[1000px]'>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>

    </div>

  )
}
