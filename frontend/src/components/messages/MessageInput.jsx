import React from 'react'
import { BsSend } from "react-icons/bs"

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type='text' placeholder='Send A Message..' className='text-sm border rounded-lg block p-2.5 w-full bg-gray-700 border-gray-600 text-white' />
            <button type='submit' className='flex items-center pe-3 absolute inset-y-0 end-0'>
                <BsSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput