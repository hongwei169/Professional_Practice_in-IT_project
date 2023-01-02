import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <div className="links">
                    <Link to="/about">
                        <span class="material-symbols-outlined">
                            info
                        </span>
                    </Link>

                </div>
            </div>


        </header>
    )
}

export default Navbar