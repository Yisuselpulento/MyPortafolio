import TestiPeople from './TestiPeople'

export const Testimonios = () => {
  return (
    <div className='flex flex-col gap-10  items-center justify-center'>
      <div className='flex justify-center flex-col items-center gap-5 text-center'>
        <h1 className='text-6xl font-black'>Testimonios de <span className=' text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400'>Personas</span> </h1>
        <p className='text-xl text-gray-300 w-[500px]'>Lee los comentarios de jugadores que han pagado por mi servicio.</p>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-10'>
        <TestiPeople
          img='../src/assets/img/foto1.webp'
          frase='Muy buena'
          parrafo='Gracias a Dios encontre a este hombre, estaba cansada de jugar contra tipos tan trolles, ahora que subi con un precio tan bajo podre jugar en paz!'
        />
        <TestiPeople
          img='../src/assets/img/foto2.webp'
          frase='Excelente'
          parrafo='Me salvo la vida! Subio la cuenta tan rapido que no me lo podia creer. Quiero que este hombre me lleve a la cama'
        />
        <TestiPeople
          img='../src/assets/img/foto33.webp'
          frase='Excelente'
          parrafo='Le pague 2 eloboost porque con el primero volvi a bajar, y los 2 han sido igual de buenos y rapidos!'
        />
        <TestiPeople
          img='../src/assets/img/foto4.webp'
          frase='Muy buena'
          parrafo='Estaba harto de que mis amigos me digan hierro. Ahora ya puedo decirles que sali sin problemas gracias a esta pag, y nadie se dara cuenta'
        />

      </div>
    </div>
  )
}
