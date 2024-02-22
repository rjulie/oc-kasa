import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/accomodation/42">Test 42</Link>
        </nav>
    )
}

export default Header
