import React from 'react';
import gymvideo from '../components/videos/gymvideo.mp4'

const Home = () => {
    return (
        <div className = 'home'>
            <div className="overlay"> </div>
            <video src={gymvideo} autoPlay loop muted />  
            <div className="content"> 
              <h1>Welcome</h1>
                 <p>To Atlantic Technological University Health and Fitness.</p>
                 
            </div>
        </div>)}

export default Home