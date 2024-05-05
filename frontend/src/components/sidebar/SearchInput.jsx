import React from 'react'
import { RiUserSearchLine } from "react-icons/ri";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full mt-2' ></input>
        <button type='submit' className='btn btn-circle bg-purple-900 text-gray-300 mt-2'>
        <RiUserSearchLine className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput