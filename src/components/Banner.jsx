import React from 'react'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Animal Care is Important as
        <br className="hidden lg:inline-block" />
        Human Care
      </h1>
      <p className="mb-8 leading-relaxed">
        Book a session with us today, to check the health status of your pet or farm animal
      </p>
      <div className="flex justify-center">
        <Link to={'/appointment'}>
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          Book an Appointment
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-contain object-contain rounded"
        alt="hero"
        src="https://berkeleyhumane.org/wp-content/uploads/2020/05/Dog-and-Cat-together-scaled-e1588793238449-1024x535.jpg"
      />
    </div>
  </div>
</section>

    </>
  )
}

export default Banner