import { About } from './components/About.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './components/Home.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Proyects } from './components/Proyects.jsx'
import { Testimonios } from './components/Testimonios.jsx'

export default function App () {
  return (
    <div className='flex flex-col md:gap-20 gap-20'>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Proyects />
      </div>
      <div>
        <Testimonios />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>

    </div>

  )
}
