import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

  const handleEmailChange = (event) =>{
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
  }

  const handleLogin = () =>{
    const admin = 'admin@vetapp.com'
    const pass = 'admin123'

    if (email == admin && password == pass){
      navigate('/admin')
    }else{
      alert('Wrong email or password')
      navigate('/login')
    }
  }

    return(
        <>
        <section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              value={email}
              
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500"
              placeholder="name@company.com"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              id="password"
              placeholder="••••••••"
              className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500"
              onChange={handlePasswordChange}
            />
          </div>
          
          <button
            type="submit"
            className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={handleLogin}
          >
            Sign in
          </button>
          
          
        </form>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
export default Login