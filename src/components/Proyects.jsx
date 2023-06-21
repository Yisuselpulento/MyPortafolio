import React from 'react'
import { Cards } from './Cards'

export const Proyects = () => {
  return (
    <div className='flex flex-col gap-8 md:gap-0 items-center justify-center'>
      <div className='flex justify-center flex-col items-center gap-5 text-center'>
        <h1 className='text-6xl font-black'>Elige el <span className=' text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500'>Boost</span> </h1>
        <p className='text-xl text-gray-300 w-[300px]'>Los mejores precios con mejor rapidez que obtendras</p>
      </div>
      <div className='flex gap-10 flex-wrap md:p-20 justify-center'>
        <Cards
          img1='../src/assets/img/iron.webp'
          img2='../src/assets/img/bronce.webp'
          precio1='300'
          precio2='100'
        />
        <Cards
          img1='../src/assets/img/bronce.webp'
          img2='../src/assets/img/silver.webp'
          precio1='300'
          precio2='100'
        />
        <Cards
          img1='../src/assets/img/silver.webp'
          img2='../src/assets/img/gold.webp'
          precio1='300'
          precio2='100'
        />
        <Cards
          img1='../src/assets/img/gold.webp'
          img2='../src/assets/img/platinum.webp'
          precio1='300'
          precio2='100'
        />
        <Cards
          img1='../src/assets/img/platinum.webp'
          img2='../src/assets/img/diamond.webp'
          precio1='300'
          precio2='100'
        />
        <Cards
          img1='../src/assets/img/diamond.webp'
          img2='../src/assets/img/master.webp'
          precio1='300'
          precio2='100'
        />
        <Cards
          img1='../src/assets/img/master.webp'
          img2='../src/assets/img/grandmaster.webp'
          precio1='300'
          precio2='100'
        />
        <Cards
          img1='../src/assets/img/grandmaster.webp'
          img2='../src/assets/img/challenger.webp'
          precio1='300'
          precio2='100'
        />

      </div>

    </div>

  )
}
