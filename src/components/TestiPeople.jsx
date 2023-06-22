import { Star } from './Star'

const TestiPeople = ({ img, frase, parrafo }) => {
  return (
    <div className='flex md:flex-row flex-col gap-10 p-8  m-2 md:m-0 shadow shadow-blue-500 rounded md:w-[600px] items-center justify-center md:h-[250px]'>
      <div className='md:w-[300px] '>
        <img className='rounded-full' src={img} width={120} height={120} alt='imagen de persona' />
      </div>
      <div className='flex flex-col gap-2 justify-center items-center md:items-start'>
        <div className='text-xl'>
          <h1> {frase}</h1>

        </div>
        <div className='text-lg text-gray-300'>
          <p>{parrafo}</p>
        </div>
        <div className='flex text-yellow-500'>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

      </div>

    </div>
  )
}

export default TestiPeople
