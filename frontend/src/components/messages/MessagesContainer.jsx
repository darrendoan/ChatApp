import React, { useEffect } from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti"
import useConversation from '../../globalstatestore/useConversation';
import { useAuthContext } from '../../context/AuthContext'

const MessagesContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          <div className='bg-gray-700 px-4 py-2 mb-2'>
            <span className='label-text'>To :</span>{" "}
            <span className='font-bold'>{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessagesContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center gap-2 px-4 text-center sm:text-lg md:text-x1 text-gray-200 font-semibold'>
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to begin messaging</p>
        <TiMessages className='text-3x1 md:text-6x1 text-center' />
      </div>
    </div>
  )
}