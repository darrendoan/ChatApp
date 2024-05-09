import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/messageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
    // Fetch messages from the database
    const { messages, loading } = useGetMessages();

    // Listen for new messages
    useListenMessages();

    // Reference to the last message element
    const lastMessageRef = useRef();

    // Scroll to the last message when new messages are received
    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages])

    return (
        <div className='flex-1 overflow-auto px-4'>
            {/* Display messages */}
            {!loading && messages.length > 0 && messages.map((message, index) => (
                <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
                    <Message message={message} />
                </div>
            ))}

            {/* Display loading skeleton */}
            {loading && Array.from({ length: 3 }).map((_, idx) => <MessageSkeleton key={idx} />)}

            {/* Display message to start conversation if no messages */}
            {!loading && messages.length === 0 && (
                <p className='text-center'>Send a message to get started!</p>
            )}
        </div>
    )
}

export default Messages
