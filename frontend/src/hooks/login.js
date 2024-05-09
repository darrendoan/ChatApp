import React, { useState } from 'react';
import { useAuthContext } from "../context/AuthContext";
import toast from 'react-hot-toast';

// Custom hook to handle login process
const useLogin = () => {
    // Accessing setAuthUser function from AuthContext
    const { setAuthUser } = useAuthContext();
    // State to manage loading status
    const [loading, setLoading] = useState(false);

    // Function to handle login process
    const login = async (userName, password) => {
        setLoading(true);
        try {
            // Sending login request to the server
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password })
            });
            const data = await res.json();
            // Handling login success
            if (!data.error) {
                // Storing user data in local storage
                localStorage.setItem("chat-user", JSON.stringify(data));
                // Setting authenticated user
                setAuthUser(data);
            } else {
                // Displaying error toast if login fails
                throw new Error(data.error);
            }
        } catch (error) {
            // Displaying error toast if there's an error during login process
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Return loading status and login function
    return { loading, login };
};

export default useLogin;
