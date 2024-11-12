import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

function TopicDescription() {

  const {userCourseInput, setUserCourseInput} =useContext(UserInputContext);


  const handleInputChange=(feildName,value)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [feildName]:value
    }))
  }
  return (
    <div className='mx-20 lg:mx-44'>
        {/* Inupt topic */}
        <div className='mt-5'>
            <label>Write a topic for which you want to generate a course </label>
            <Input placeholder={'Topic'} className="h-14 text-xl"
              defaultValue ={userCourseInput?.topic}
              onChange={(e)=>handleInputChange('topic',e.target.value)} 
            ></Input>
        </div>

        <div className='mt-5'>
            <label>Tell us more about the course what you want to include in the  </label>
            <Textarea placeholder="Course Description" 
            defaultValue ={userCourseInput?.description}
            onChange={(e)=>handleInputChange('description',e.target.value)} 
            ></Textarea>
        </div>

        {/* Text Area Desc */}
    </div>
  )
}

export default TopicDescription