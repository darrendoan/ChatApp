import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/login';

const Login = () => {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin()

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(username, password)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-purple-500'> Darren's Chatapp</span>
        </h1>

        <form onSubmit={handleSubmit()}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
              value={userName}
              onChange={(event) => setUsername(event.target.value)} />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'> Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
              value={password}
              onChange={(event) => setPassword(event.target.value)} />
          </div>
          <Link to='/signup' className='text-base  hover:underline hover:text-purple-400 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>

          <button className='btn btn-block btn-sm mt-2'
            disabled={loading}>

            {loading ? <span className='loading loading-spinner'></span> : "Login"}

          </button>
        </form>
      </div>

    </div>
  )
}

export default Login