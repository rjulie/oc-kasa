import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar">
      <img src="/assets/Kasa-logo.svg" alt="Logo Kasa" />
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </nav>
  )
}

export default Header
