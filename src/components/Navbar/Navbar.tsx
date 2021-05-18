import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-evenly">
      <div className="navbar-brand me-auto">
        <Link href="/">
          <a className="text-decoration-none text-dark">Inicio</a>
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <Link href="customers">
            <a className="navbar-link text-decoration-none text-secondary">
              Clientes
            </a>
          </Link>
        </li>
        <li className="navbar-item mx-3">
          <Link href="cobranzas">
            <a className="navbar-link text-decoration-none text-secondary">
              Cobranzas
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
