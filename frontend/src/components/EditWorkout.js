import { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { set } from 'date-fns';

const Edit = ({workout}) => {
    let { id } = useParams();

    const navigate = useNavigate();
    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);




    const handleSubmit = async (e) => {
        e.preventDefault();


        const response = await fetch('/api/workouts/' + id, {
            method: 'PATCH',
            body: JSON.stringify({ title, load, reps }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });


        const data = await response.json();

        if (!response.ok) {
            setError(data.error);
            setEmptyFields(data.emptyFields);
        }
        else {
            setTitle(response.data.title);
            setLoad(response.data.load);
            setReps(response.data.reps);
            setError(null);
            setEmptyFields([]);
            console.log("Workout edited", data);
            dispatch({ type: 'UPDATE_WORKOUT', payload: data });
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Edit Workout</h3>

            <label>Workout Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Load (in kg):</label>
            <input

                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Reps:</label>
            <input

                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />
            <button type='submit'>Update Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Edit