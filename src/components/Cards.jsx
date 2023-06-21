export const Cards = ({ img1, img2, precio1, precio2 }) => {
  return (
    <div className='flex flex-col gap-9  shadow shadow-gray-800 items-center justify-center p-3 rounded-lg py-5'>
      <div className='flex gap-3 items-center text-gray-400 '>
        <img src={img1} alt='imagen de emblema' width={120} height={120} />
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>

        <img className='w-[120px]' src={img2} alt='imagen de emblema 2' />
      </div>
      <div>
        <p className='text-xl'>Precio por liga: ${precio1}</p>
        <p className='text-lg'>Precio por Div: ${precio2}</p>
      </div>
      <div>
        <button className='flex gap-3 border border-yellow-500 hover:border-red-500  rounded-lg items-center py-3 px-12 font-bold  justify-center bg-black'>
          Escoger

        </button>
      </div>

    </div>
  )
}
