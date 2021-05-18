import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
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
      </ul>
    </nav>
  )
}

export default Navbar
