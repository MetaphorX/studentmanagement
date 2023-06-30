import React, {useState, useEffect} from 'react'
import { client } from '../client'
import { messageQuery } from '../lib'
import Booking from '../components/Booking'

const Admin = () => {
  
  const [items, setItem] = useState([])

  useEffect(() =>{
    client.fetch(messageQuery)
      .then((data) =>(
        setItem(data)
      ))
  },[messageQuery])
  console.log(items)

  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">
        All Appointments
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        View all appointments
      </p>
    </div>
    
    <div className="lg:w-full md:w-full mx-auto">
    {items?.map((item) =>(
        
          <Booking booking={item} key={item?._id}/>
       
    
     ))}
    
    </div>

    </div>
    </section>
  )
}

export default Admin