import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function header() {
  return (
    <div className='flex justify-between items-center p-1 shadow-md'>
        <div className='flex items-center gap-4'>
            <Image src={'/logo.png'} width={50} height={50} alt='logo'></Image> 
            <h1 className='text-3xl font-bold'>AI Course Generator</h1>
        </div>
        <UserButton></UserButton>
    </div>
  )
}

export default header