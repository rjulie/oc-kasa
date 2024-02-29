import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <div className="error-title">404</div>
      <div className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link to="/" className="error-redirect">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
