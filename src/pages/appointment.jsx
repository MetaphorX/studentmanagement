import React, {useState, useEffect} from 'react'

const Appointment = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)

  

  return (
    <>
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">
        Book Appointment
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Book appointment for consultations with any our physicians, a reply would be sent
      </p>
    </div>
    <form onSubmit="">
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) =>setName(e.target.value)}
            value={name}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) =>setEmail(e.target.value)}
            value={email}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) =>setTitle(e.target.value)}
            value={title}
            />
          </div>
        </div>
        
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Description
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
              onChange={(e) =>setDescription(e.target.value)}
            value={description}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Submit
          </button>{error && (<div>
              <p className='text-red-500'>{error}</p>
              </div>)}

        </div>
        
      </div>
    </div>
    </form>
  </div>
</section>

    </>
  )
}

export default Appointment