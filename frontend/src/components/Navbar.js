import { Link } from "react-router-dom"
import atu from '../images/atu.jpg'
import "./NavbarStyle.css";
import React, { Component } from 'react' 

class Navbar extends Component {
state={clicked:false};
handleClick = () =>{
    this.setState({clicked:
    !this.state.clicked})
}
render(){
    return (
        //<header>
            //<div className="container">
                //<Link to="/">
                    //<h1>Workout Buddy</h1>
                //</Link>
                //<div className="links">
                    //<Link to="/about">
                        //<span class="material-symbols-outlined">
                            //info
                        //</span>
                   // </Link>

                //</div>
            //</div>

        //<a href ="index.html"><img src={atu} width="150" height="100" ></img></a>
        //</header>

        <>
        <nav>
        <a href ="index.html"><img src={atu} width="150" height="100" ></img></a>

            <div id="navbar" className={this.state.clicked ? 
            "#navbar active" : "#navbar"}>
                <ul>
                    <li><a className="active" href= "index.html">Home Page</a></li>
                    <li><a href= "index.html">Workout</a></li>
                    <li><a href= "index.html">Contact</a></li>
                    <li><a href= "index.html">About</a></li>
                </ul>
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