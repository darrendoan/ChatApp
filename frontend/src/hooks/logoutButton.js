import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from 'react-hot-toast';

// Custom hook to handle logout process
const useLogout = () => {
    // Accessing setAuthUser function from AuthContext
    const { setAuthUser } = useAuthContext();
    // State to manage loading status
    const [loading, setLoading] = useState(false);

    // Function to handle logout process
    const logout = async () => {
        setLoading(true);
        try {
            // Sending logout request to the server
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json();
            // Handling logout success
            if (!data.error) {
                // Removing user data from local storage
                localStorage.removeItem("chat-user");
                // Setting authenticated user to null
                setAuthUser(null);
            } else {
                // Displaying error toast if logout fails
                throw new Error(data.error);
            }
        } catch (error) {
            // Displaying error toast if there's an error during logout process
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Return loading status and logout function
    return { loading, logout };
};

export default useLogout;
