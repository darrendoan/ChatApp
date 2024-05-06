import React, { useState } from 'react'
import { GenderCheck } from './GenderCheck'
import { Link } from 'react-router-dom'
import signUpButton from '../../hooks/signUpButton';

const Signup = () => {
  const [inputs, SetInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = signUpButton()

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(inputs)
  }

  const handleCheckBoxChange = (gender) => {
    SetInputs({ ...inputs, gender })
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300 '>
          Sign Up Now <span className='text-purple-500'>Darren's ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full name</span>
            </label>
            <input type='text' placeholder='Darren Doan' className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(event) => SetInputs({ ...inputs, fullName: event.target.value })} />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Darren Doan' className='w-full input input-bordered h-10'
              value={inputs.userName}
              onChange={(event) => SetInputs({ ...inputs, userName: event.target.value })} />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'> Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(event) => SetInputs({ ...inputs, password: event.target.value })} />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(event) => SetInputs({ ...inputs, confirmPassword: event.target.value })} />
          </div>

          <GenderCheck onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to='/login' className='text-base  hover:underline hover:text-purple-400 inline-block'>
            Already have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 border-slate-700'>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup