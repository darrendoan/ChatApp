import React, { useEffect, useState } from 'react'
import useConversation from '../globalstatestore/useConversation';
import toast from 'react-hot-toast';

// Custom hook to fetch messages for the selected conversation
const useGetMessages = () => {
    // State to manage loading status and messages
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        // Function to fetch messages
        const getMessages = async () => {
            setLoading(true);
            try {
                // Fetch messages for the selected conversation
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await res.json();
                // Set messages in the state
                if (data.error) throw new Error(data.error);
                setMessages(data);
            } catch (error) {
                // Display error toast if there's an error fetching messages
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        // Fetch messages when a conversation is selected
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    // Return messages and loading status
    return { messages, loading };
}

export default useGetMessages;
