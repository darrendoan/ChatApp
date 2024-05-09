import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../globalstatestore/useConversation'
import { getTime } from '../../utils/getTime'

const Message = ({ message }) => {
    // Accessing authentication user from context
    const { authUser } = useAuthContext()

    // Accessing selected conversation from global state
    const { selectedConversation } = useConversation()

    // Checking if the message is from the authenticated user
    const fromMe = message.senderId === authUser._id

    // Determining the chat bubble position based on the sender
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';

    // Getting the profile picture based on the message sender
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

    // Setting background color for chat bubble
    const textBgColour = fromMe ? 'bg-purple-500' : "";

    // Formatting message creation time
    const formattedTime = getTime(message.createdAt)

    // Adding shake animation to message if required
    const textShake = message.shouldShake ? "shake" : ""

    return (
        <div className={`chat ${chatClassName}`}>
            {/* Displaying profile picture */}
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        alt="image placeholder"
                        src={profilePic}
                    />
                </div>
            </div>
            {/* Displaying message content */}
            <div className={`chat-bubble text-white ${textBgColour} ${textShake}`}>{message.message}</div>
            {/* Displaying message creation time */}
            <div className='items-center opacity-50 pb-2 text-xs flex gap-1 chat-footer'>{formattedTime}</div>
        </div>
    )
}

export default Message
