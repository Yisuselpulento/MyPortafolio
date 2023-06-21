import { About2 } from './About2'

export const About = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-20 p-20 '>
      <div className='flex '>
        <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-6xl font-black'>About</h1>
      </div>
      <h1 className='text-5xl'>EN PROCESO</h1>
      <img src='../src/assets/img/Asamitaka.jfif' width={500} />
    </div>

  )
}
