import React from 'react'
import { Students } from '../Constants/Multiple'
import Attendencebutton from './Attendencebutton'
const Members = () => {
  return (
    <div className=' flex gap-2 justify-center items-center'>
      {
        Students.map((student, index) => (
            <div key={index} className='w-36 h-36 bg-red-600  flex  flex-col justify-center items-center'>
                <h1>{student.name}</h1>
                <h1>{student.id}</h1>
               <Attendencebutton/>
            </div>
        ))
      }
    </div>
  )
}

export default Members

