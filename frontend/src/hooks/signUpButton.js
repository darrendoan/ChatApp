import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

// Custom hook to handle sign up process
const useSignUpButton = () => {
    // Accessing setAuthUser function from AuthContext
    const { setAuthUser } = useAuthContext();
    // State to manage loading status
    const [loading, setLoading] = useState(false);

    // Function to handle sign up process
    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        // Function to handle input validation
        const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
        if (!success) return;
        setLoading(true);
        try {
            // Sending sign up request to the server
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            });

            const data = await res.json();
            // Handling sign up success
            if (!data.error) {
                // Storing user data in local storage
                localStorage.setItem("chat-user", JSON.stringify(data));
                // Setting authenticated user in context
                setAuthUser(data);
            } else {
                // Displaying error toast if sign up fails
                throw new Error(data.error);
            }
        } catch (error) {
            // Displaying error toast if there's an error during sign up process
            toast.error(error.message);
        } finally {
            setLoading(false);
        };
    };

    // Return loading status and sign up function
    return { loading, signup };
};

// Function to handle input validation
function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all the fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 8) {
        toast.error("Password must contain at least 8 characters");
        return false;
    }

    return true;
}

export default useSignUpButton;
