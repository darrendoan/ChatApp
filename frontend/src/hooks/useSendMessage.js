import useConversation from '../globalstatestore/useConversation';
import toast from 'react-hot-toast';
import { useState } from 'react';

// Custom hook for sending messages
const useSendMessage = () => {
    // State for loading status
    const [loading, setLoading] = useState(false);

    // Accessing messages, setMessages, and selectedConversation from global state
    const { messages, setMessages, selectedConversation } = useConversation();

    // Function to send a message
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            // Sending a POST request to the server to send a message
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });

            // Handling the response
            const data = await res.json();
            if (data.error)
                throw new Error(data.error);

            // Adding the new message to the conversation
            setMessages([...messages, data]);

        } catch (error) {
            // Displaying an error toast if an error occurs
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // Returning sendMessage function and loading status
    return { sendMessage, loading };
}

export default useSendMessage;
