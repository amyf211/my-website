import { Link } from "react-router-dom"

function Header() {

    return (
        <header id="header">
           <nav id="nav">
            <Link to='/' className="links">Home</Link>
            <Link to='/about' className="links">About</Link>
            <Link to='/projects' className="links">Projects</Link>
           </nav>
        </header>
       )
}

export default Header