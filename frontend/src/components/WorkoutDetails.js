import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Link } from "react-router-dom";

//date fns
import { formatDistanceToNow } from 'date-fns';

const WorkoutDetails = ({ workout }) => {

    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        });

        const data = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: data})
        }
    }

   

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong> {workout.load}</p>
            <p><strong>Number of reps: </strong> {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.updatedAt),{addSuffix: true})}</p>
            <span id="delete-workout"className = "material-symbols-outlined" onClick={handleClick}>delete</span>    
            <Link to={`/edit/${workout._id}`}> 
            <span id ="edit-workout" className="material-symbols-outlined">edit</span>     
            </Link>
         
        </div>

        
    );
}

export default WorkoutDetails;