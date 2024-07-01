import { Link } from "react-router-dom"

function Header() {

    return (
        <header id="header">
           <nav id="nav">
            <Link to='/' className="links">Home</Link>
           </nav>
        </header>
       )
}

export default Header