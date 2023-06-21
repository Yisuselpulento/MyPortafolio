import React, { useEffect, useState } from 'react'
import Alerta from './Alerta'
import { Alertaverde } from './Alertaverde'

export const TheModal = ({ setIsOpen }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [cel, setCel] = useState('')
  const [error, setError] = useState(false)
  const [msj, setMsj] = useState('')
  const [succes, setSucces] = useState(false)

  const handleformModal = (e) => {
    e.preventDefault()

    if ([name, email, cel].includes('')) {
      setError(true)
      setMsj('Todos los campos son obligatorios')
      return
    }

    if (name.length < 3) {
      setError(true)
      setMsj('El nombre debe ser mayor a 2 caracteres')
    }

    if (!/^([0-9])*$/.test(cel) || cel.length < 8) {
      setError(true)
      setMsj('Debe colocar un numero de telefono valido')
      return
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError(true)
      setMsj('Debes colocar un Email valido')
      return
    }

    setSucces(true)
  }

  useEffect(() => {
    setError(false)
    setMsj('Todo listo! Le enviaremos un mensaje para confirmar')
  }, [succes])

  return (
    <form onSubmit={handleformModal}>
      <div className='flex flex-col gap-7 md:w-[700px] p-5 overflow-y-scroll h-[500px] scrollbar scrollbar-thumb-red-600'>
        <div className='font-black text-4xl flex justify-between'>
          <h1 className='text-yellow-500 '>Datos</h1>
          <button onClick={
            () => { setIsOpen(false) }
          }
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-8 h-8'>
              <path fillRule='evenodd' d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z' clipRule='evenodd' />
            </svg>

          </button>

        </div>
        <div className='flex gap-5 flex-wrap'>
          <div className='flex flex-col gap-2 md:w-[300px] w-full'>
            <label
              htmlFor='nombres'
              className='text-xl'
            >Nombre de invocador <span className='text-yellow-500 font-bold'>*</span>
            </label>
            <input
              className='py-3 px-3  text-black font-bold' type='text'
              id='nombres'
              placeholder='Nombre Aqui'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2  md:w-[300px] w-full'>
            <label
              htmlFor='number'
              className='text-xl'
            >Numero Cel<span className='text-yellow-500 font-bold'>*</span>
            </label>
            <input
              className='py-3 px-3  font-bold text-black' type='text'
              id='number'
              placeholder='+569...'
              onChange={e => setCel(e.target.value)}
              value={cel}
            />
          </div>

        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-2 w-full'>
            <label
              htmlFor='emails'
              className='text-xl'
            >Email <span className='text-yellow-500 font-bold'>*</span>
            </label>
            <input
              className='py-3 px-3 font-bold text-black' type='text'
              id='emails'
              placeholder='example@hotmail.com'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>

        </div>

        <div className='flex gap-2'>
          <input type='checkBox' />
          Porfavor mandenme informacion sobre algun problema o actualizacion
        </div>
        {error && <Alerta>{msj}</Alerta>}
        {succes && <Alertaverde>{msj}</Alertaverde>}
        <div className='mb-5 '>
          <input
            type='submit'
            value='ELEGIR BOOST'
            className={`flex gap-3 border 
            items-center py-3 px-12 font-bold w-full justify-center  ${succes ? 'bg-gray-300' : 'border-yellow-500 hover:border-red-500  hover:shadow-red-500  hover:shadow-md  bg-black  cursor-pointer shadow-yellow-500 shadow-md'}`}
          />
        </div>
      </div>
    </form>
  )
}
