import React, { useState } from 'react'
import { BsSend } from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  // State to manage the input message
  const [message, setMessage] = useState("");

  // Custom hook to send a message
  const { loading, sendMessage } = useSendMessage();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the message is empty
    if (!message.trim()) return;

    // Call the sendMessage function to send the message
    await sendMessage(message);

    // Clear the message input
    setMessage("");
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        {/* Input field for message */}
        <input
          type='text'
          placeholder='Send A Message..'
          className='text-sm border rounded-lg block p-2.5 w-full bg-gray-700 border-gray-600 text-white'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* Button to submit the message */}
        <button type='submit' className='flex items-center pe-3 absolute inset-y-0 end-0'>
          {/* Display loading spinner while sending message */}
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
