import React, { useEffect } from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti"
import useConversation from '../../globalstatestore/useConversation';
import { useAuthContext } from '../../context/AuthContext'

// Component for displaying messages and message input
const MessagesContainer = () => {
  // Accessing selected conversation and function to set selected conversation from global state
  const { selectedConversation, setSelectedConversation } = useConversation()

  // Clear selected conversation when component unmounts
  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {/* Render messages if a conversation is selected */}
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          {/* Header showing recipient's name */}
          <div className='bg-gray-700 px-4 py-2 mb-2'>
            <span className='label-text'>To :</span>{" "}
            <span className='font-bold'>{selectedConversation.fullName}</span>
          </div>

          {/* Display messages and message input */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessagesContainer;

// Component to display when no chat is selected
const NoChatSelected = () => {
  // Accessing authenticated user from context
  const { authUser } = useAuthContext();

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center gap-2 px-4 text-center sm:text-lg md:text-x1 text-gray-200 font-semibold'>
        {/* Welcome message */}
        <p>Welcome 👋 {authUser.fullName}</p>
        {/* Prompt to select a chat */}
        <p>Select a chat to begin messaging</p>
        {/* Icon */}
        <TiMessages className='text-3x1 md:text-6x1 text-center' />
      </div>
    </div>
  )
}
