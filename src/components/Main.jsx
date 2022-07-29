import React from 'react'

const Main = () => {
  return (
    <div className='max-w-[1640px] p-4 mx-auto '>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods<span className='text-orange-600 px-2'>Delivered</span></h1>
            </div>
            <img src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full max-h-[500px] object-cover' alt=' not Found' />
        </div>
    </div>
  )
}

export default Main