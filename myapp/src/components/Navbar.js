import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="header">
            <div className="logo-section">
                <img
                    src="/husseinpro.png"
                    alt="Hussein"
                    className="navbar-photo"
                />

                <div className="logo">
                    Hussein EL-Hussein
                </div>
            </div>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>

                
            </nav>
        </header>
    );
}

export default Navbar;