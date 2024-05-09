import React from 'react'
import { useSocketContext } from '../../context/SocketCon';
import useConversation from '../../globalstatestore/useConversation';

// Component to display individual conversation in the conversation list
const Conversation = ({ conversation, lastIdx, emoji }) => {
    // Accessing selected conversation and function to set selected conversation from global state
    const { selectedConversation, setSelectedConversation } = useConversation();

    // Checking if the conversation is selected
    const isSelected = selectedConversation?._id === conversation._id;

    // Accessing online users from socket context
    const { onlineUsers } = useSocketContext();

    // Checking if the user is online
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <>
            {/* Conversation item */}
            <div
                className={`gap-2 items-center flex hover:bg-purple-500 p-2 py-1 cursor-pointer rounded 
                ${isSelected ? "bg-purple-500" : ""}
                `}
                onClick={() => setSelectedConversation(conversation)}
            >
                {/* Avatar */}
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='rounded-full w-12 '>
                        <img src={conversation.profilePic}
                            alt='user avatar' />
                    </div>
                </div>

                {/* Conversation details */}
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        {/* User's name */}
                        <p className='font-bold text-gray-300'>{conversation.fullName}</p>
                        {/* Emoji */}
                        <span className='text-x1'>{emoji}</span>
                    </div>
                </div>

                {/* Divider */}
                {!lastIdx && <div className='divider my-0 py-0 h-1' />}
            </div>
        </>
    );
};

export default Conversation;
