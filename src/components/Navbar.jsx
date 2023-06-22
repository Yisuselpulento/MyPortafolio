/* eslint-disable react/jsx-indent */
import { useState } from 'react'
import Logo from '../assets/img/logoyellow.webp'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleChangeNavbar = () => {
    setOpen(!open)
    console.log(open)
  }
  return (
    <div className='md:flex md:justify-center md:items-center  fixed w-full'>
      <button
        className='mt-5 mx-5 md:hidden'
        onClick={handleChangeNavbar}
      >
        {!open
          ? <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-9 h-9'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          : <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-9 h-9'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>}
        {' '}
      </button>

      <nav className={`md:flex items-center py-2 md:px-2 px-8 md:w-[1000px] md:justify-between bg-black bg-opacity-40 ${!open && 'hidden'} `}>

        <div className='mb-4 md:mb-0'>
          <img src={Logo} alt='logo del protagonista' width={60} />
        </div>
        <ul className='flex flex-col md:flex-row gap-10 md:text-lg text-3xl mb-10 md:mb-0'>
          <li>
            <a className='hover:text-yellow-500' href='#home'>Home</a>
          </li>
          <li>
            <a className='hover:text-yellow-500' href='#about'>About</a>
          </li>
          <li>
            <a className='hover:text-yellow-500' href='#precios'>Precios</a>
          </li>

          <li>
            <a className='hover:text-yellow-500' href='#testimonios'>Testimonios</a>
          </li>
          <li>
            <a className='hover:text-yellow-500' href='#footer'>Contactame</a>
          </li>

        </ul>

      </nav>

    </div>

  )
}
