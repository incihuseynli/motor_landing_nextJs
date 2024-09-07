import { IBtnProps } from '@/types/types'
import React from 'react'

const Btn = ({children}:IBtnProps) => {
  return (
    <button className='w-full md:w-96 h-16 font-bold text-primary text-2xl text-center capitalize border-2 border-primary bg-white  hover:bg-primary hover:text-white transition-all duration-700 ease-in-out rounded-md'>
        {children}
    </button>
  )
}

export default Btn