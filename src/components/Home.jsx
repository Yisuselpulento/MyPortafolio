import Foto from '../assets/img/Foto.webp'
import { IconGit, IconInsta, React, Js, Tailwind, Css, Html, Photoshop } from './Icons.jsx'

export const Home = () => {
  return (
    <main className='md:px-20 md:pt-60 p-20 flex flex-col md:gap-40  items-center gap-10'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-20'>
        <div className=' md:w-[280px]'>
          <img src={Foto} className='rounded-full' />
        </div>
        <div className='flex flex-col md:w-[400px] md:gap-5 gap-10 '>
          <h1 className='text-6xl text-gray-200 tracking-tight font-black'><span className=' text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500'>Front-End</span> React Developer</h1>
          <p className='text-xl text-gray-300'>Mi nombre es Alan y soy un jugador profesional de League of Legends</p>
          <div className='flex md:gap-6 gap-3 flex-col md:flex-row transition-colors'>
            <div className=' shadow-yellow-500 shadow-3xl hover:shadow-3xl hover:shadow-red-500  rounded-full'>
              <button className='flex gap-3 border border-yellow-500 hover:border-red-500  rounded-lg items-center py-3 px-12 font-bold w-full justify-center bg-black'>
                GitHub
                <IconGit />
              </button>
            </div>

            <button className='flex gap-3 border rounded-lg items-center py-3 px-7 font-bold w-full bg-black justify-center hover:border-black hover:text-black hover:bg-white '>
              Instagram
              <IconInsta />
            </button>

          </div>
        </div>

      </div>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div>
          <h1 className='text-xl'>Tech Stack</h1>
        </div>
        <div className='flex justify-center items-center gap-5 flex-wrap'>
          <div className='bg-gray-200 p-3 rounded-full flex items-center justify-center'>
            <Html />
          </div>
          <div className='bg-gray-200 p-3 rounded-full flex  items-center justify-center'>
            <Css />
          </div>
          <div className='bg-gray-200 p-3 rounded-full flex items-center justify-center'>
            <Js />
          </div>
          <div className='bg-gray-200 p-3 rounded-full flex items-center justify-center'>
            <React />
          </div>
          <div className='bg-gray-200 p-3 rounded-full flex items-center justify-center'>
            <Tailwind />
          </div>
          <div className='bg-gray-200 p-3 rounded-full flex items-center justify-center'>
            <Photoshop />
          </div>

        </div>

      </div>
    </main>
  )
}
