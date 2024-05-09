import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

// Custom hook to fetch conversations
const useGetConversations = () => {
    // State to manage loading status and conversations
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        // Function to fetch conversations
        const getConversations = async () => {
            setLoading(true);
            try {
                // Fetch conversations
                const res = await fetch('/api/users');
                const data = await res.json();
                // Set conversations in the state
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                // Display error toast if there's an error fetching conversations
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        // Fetch conversations when component mounts
        getConversations();
    }, []);

    // Return loading status and conversations
    return { loading, conversations };
}

export default useGetConversations;
