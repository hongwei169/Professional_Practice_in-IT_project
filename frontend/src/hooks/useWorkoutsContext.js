import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

// This is a custom hook that will be used in the WorkoutForm component
// to access the context and dispatch the action to the reducer
// to create a new workout
export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);
    
    if (!context) {
        throw new Error('useWorkoutsContext must be used within a WorkoutsContextProvider');
    }

    return context
}