import Asamitaka from '../assets/img/Asamitaka.webp'

export const About = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-20'>
      <div className='flex'>
        <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-6xl font-black'>About</h1>
      </div>
      <div className='flex px-20 gap-10 flex-col md:flex-row'>
        <div className='flex flex-col w-[500px] text-center md:text-left items-center'>
          <h1 className='text-3xl font-black'>Sobre mi</h1>
          <p className='text-xl text-gray-300 w-[350px] md:w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere aperiam, iste, mollitia corrupti sed ipsum quaerat asperiores odit voluptate quo ullam sint tempore quae, dolorem possimus eos? Cumque, consectetur.
            Voluptatibus aut numquam aspernatur error provident quia beatae, vero blanditiis ab, quibusdam minima tenetur! Officiis eos eum porro architecto! Quo eligendi reiciendis culpa facere necessitatibus blanditiis assumenda ipsum ut vel?
          </p>
        </div>
        <div className='flex justify-center'>
          <img className=' shadow-pink-500 shadow-3xl ' src={Asamitaka} width={300} alt='imagen de asa mitaka' />

        </div>

      </div>

    </div>

  )
}
