import React, { useState } from 'react'
import { Cards } from './Cards'
import iron from '../assets/img/iron.webp'
import silver from '../assets/img/silver.webp'
import gold from '../assets/img/gold.webp'
import platinum from '../assets/img/platinum.webp'
import diamond from '../assets/img/diamond.webp'
import master from '../assets/img/master.webp'
import grandmaster from '../assets/img/grandmaster.webp'
import challenger from '../assets/img/challenger.webp'
import bronce from '../assets/img/bronce.webp'

import Modal from 'react-modal'
import { TheModal } from './TheModal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'black'
  }
}

Modal.setAppElement('#root')

export const Proyects = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  return (

    <div className='flex flex-col gap-8 md:gap-0 items-center justify-center'>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      ><TheModal setIsOpen={setIsOpen} />
      </Modal>

      <div className='flex justify-center flex-col items-center gap-5 text-center'>
        <h1 className='text-6xl font-black'>Elige el <span className=' text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500'>Boost</span> </h1>
        <p className='text-xl text-gray-300 w-[300px]'>Los mejores precios con mejor rapidez que obtendras</p>
      </div>
      <div className='flex gap-10 flex-wrap md:p-20 justify-center'>
        <Cards
          img1={iron}
          img2={bronce}
          precio1='25.000'
          precio2='3.500'
          setIsOpen={setIsOpen}
        />
        <Cards
          img1={bronce}
          img2={silver}
          precio1='40.000'
          precio2='5.000'
          setIsOpen={setIsOpen}
        />
        <Cards
          img1={silver}
          img2={gold}
          precio1='70.000'
          precio2='7.000'
          setIsOpen={setIsOpen}
        />
        <Cards
          img1={gold}
          img2={platinum}
          precio1='100.000'
          precio2='10.000'
          setIsOpen={setIsOpen}
        />
        <Cards
          img1={platinum}
          img2={diamond}
          precio1='200.000'
          precio2='25.000'
          setIsOpen={setIsOpen}
        />
        <Cards
          img1={diamond}
          img2={master}
          precio1='400.000'
          precio2='50.000'
          setIsOpen={setIsOpen}
        />
        <Cards
          img1={master}
          img2={grandmaster}
          precio1='700.000'
          precio2='70.000'
          setIsOpen={setIsOpen}
        />
        <Cards
          img1={grandmaster}
          img2={challenger}
          precio1='1.000.000'
          precio2='100.000'
          setIsOpen={setIsOpen}
        />

      </div>

    </div>

  )
}
