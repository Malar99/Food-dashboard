import React from 'react'

const Card = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Grab now!!</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://i.pinimg.com/564x/33/2e/bb/332ebbe50470b3dfc8581291a14b4186.jpg" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Grab now!!</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://i.pinimg.com/564x/a0/04/3e/a0043e49da863a0d0e75e72194f7942d.jpg" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Grab now!!</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://i.pinimg.com/564x/53/88/71/538871bd4a207679f6b9472cabf27b16.jpg" alt="" />
        </div>
    </div>
  )
}

export default Card