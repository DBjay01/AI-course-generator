import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'
import { HiOutlinePuzzlePiece } from "react-icons/hi2";

function CourseBasicInfo({course}) {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
                   <h2 className='font-bold text-3xl'>{course?.courseOutput?.course?.name}</h2>
                   <p className='text-sm text-gray-400 mt-3'>{course?.courseOutput?.course?.description}</p>
                   <h2 className='font-medium mt-2 flex gap-2 items-center text-primary'> <HiOutlinePuzzlePiece /> {course?.category}</h2>
                   <Button className='w-full mt-5'>Start</Button>
            </div>
            <div>
                <Image src={'/placeHolder.png'} alt='introImg' width={300} height={300}
                 className=' rounded-xl h-[250px] w-[280px] '></Image>
            </div>


        </div>
    </div>
  )
}

export default CourseBasicInfo