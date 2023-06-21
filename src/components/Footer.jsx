import logobw from '../assets/img/logobw.webp'

import { IconGit, IconInsta } from './Icons.jsx'
export const Footer = () => {
  return (
    <div className='py-10 bg-zinc-900 flex flex-col md:flex-row md:justify-between md:px-80 items-center justify-center gap-10'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='w-[100px]'>
          <img src={logobw} />

        </div>
        <div>
          <h1 className='text-zinc-400 text-2xl font-bold'>CONTACTAME</h1>
        </div>
        <div className='flex gap-5  '>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/Yisuselpulento'>
            <IconGit />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/_.monsster._/'>
            <IconInsta />
          </a>

        </div>
      </div>
      <div className='flex flex-col gap-4 items-center text-center'>
        <h1 className='text-zinc-400 text-2xl font-bold'>HORARIOS</h1>
        <p className='w-[300px] text-lg'>Lunes:

          9:00 a.m. - 1:00 p.m.
          2:00 p.m. - 6:00 p.m.
          Martes:
          9:00 a.m. - 1:00 p.m.
          2:00 p.m. - 6:00 p.m.
          Miércoles:
          9:00 a.m. - 1:00 p.m.
          2:00 p.m. - 6:00 p.m.
          Jueves:
          9:00 a.m. - 1:00 p.m.
          2:00 p.m. - 6:00 p.m.
          Viernes:
          9:00 a.m. - 1:00 p.m.
          2:00 p.m. - 6:00 p.m.

        </p>

      </div>
    </div>
  )
}
