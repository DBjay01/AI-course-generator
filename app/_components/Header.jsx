import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between p-4 shadow-md'>
        <div className='flex items-center gap-4'>
            <Image src={'/logo.png'} width={50} height={50} alt='logo'></Image> 
            <h1 className='text-2xl font-bold'>Vivid Fusion</h1>
        </div>
        <Button> Get started</Button>
    </div>
  )
}

export default Header