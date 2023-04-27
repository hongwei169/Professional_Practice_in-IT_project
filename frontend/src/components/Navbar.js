/*
import { Link } from "react-router-dom"
import atu from '../images/atu.png'
import "./NavbarStyle.css";
import React, { Component } from 'react' 
import { useLogout } from "../hooks/useLogout";

class Navbar extends Component {
state={clicked:false};
handleClick = () =>{
    this.setState({clicked:
    !this.state.clicked})
}




render(){

    return (

        <>
        <nav>
        <a href ="/"><img src={atu} width="200" height="100" ></img></a>
        
            <div id="navbar" className={this.state.clicked ? 
            "#navbar active" : "#navbar"}>
                <div>
                    <button onClick={this.handleLogoutClick}>Log Out</button>
                </div>
                    <ul>

                        <li><a href= "/">Home</a></li>
                        <li><a href= "workout">Workout</a></li>
                        <li><a href= "gallery">Gallery</a></li>
                        <li><a href= "about">About</a></li>
                        
                    </ul>
                <div >
                    <li><a href= "login">Login</a></li>
                    <li><a href= "signup">Sign Up</a></li>
                </div>
            </div>
            <div id = "mobile" onClick={this.handleClick}>
                <i id= "bar" className={this.state.clicked ? 
                "fas fa-times" : " fas fa-bars" }></i>  
            </div>
        </nav>
        </>
    )

}
    
}

export default Navbar
*/

import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import atu from '../images/atu.png'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
    return <Link to="http://localhost:3000/login"/>
  }

  const state = {
    clicked: false,
    }

    const handleOnClick = () =>{
         state = {clicked:
        !state.clicked}
    }


  return (
    //<header>
    <div>
      <nav>
        <Link to="/">
            <img src= {atu} />
        </Link>
        {user && (
          <div id = 'navbar' className={state.clicked ? "#navbar active" : "#navbar"}>
                <ul>
                    <li><a href= "/">Home</a></li>
                    <li><a href= "workout">Workout</a></li>
                    <li><a href= "gallery">Gallery</a></li>
                    <li><a href= "about">About</a></li>
                    <li><span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                    </li>
                    
                </ul>
              
          </div>
        )}
        {!user && (
          <div id='navbar'>
            <ul>
                <li><a href= "login">Login</a></li> 
                <li><a href= "signup">Sign Up</a></li>
            </ul>
            </div>
        )}

        </nav>
        </div>
   //</header>
  )
}

export default Navbar