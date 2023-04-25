import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// This is a custom hook that will be used in the WorkoutForm component
// to access the context and dispatch the action to the reducer
// to create a new workout
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }

    return context
}