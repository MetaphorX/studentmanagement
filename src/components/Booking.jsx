import React from 'react'

const Booking = ({booking:{name,title,email,description}}) => {
  return (
    <>

      
              <div className='shadow-md w-full mx-auto font-semibold py-2 px-2 mb-4' >
              <h4 className='text-blue-500 font-semibold'>{name}</h4>
              <p className='text-gray-500'>{email}</p>
              <p className='text-gray-500'>{title}</p>
              <p className='text-gray-500 text-xs'>{description}</p>
              <div className='mt-4 border-t py-4'>
                <button className='mr-2 bg-green-500 text-white px-2 py-2 rounded-md hover:bg-green-600 text-sm'>Accept</button>
                <button className='mr-2 bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600 text-sm'>Delete</button>
              </div>
              </div>
      

      
      
    
    </>
  )
}

export default Booking