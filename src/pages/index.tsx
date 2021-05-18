import React from "react"
import Link from "next/dist/client/link"

const home = () => {
  return (
    <>
      <h2 className="text-center my-4">Home</h2>
      <br />
      <p>
        Inmobi es una moderno sistema de gestión de clientes y cobranzas
        construido bajo los últimos estándares de calidad en la industria del
        desarrollo de software.{" "}
        <span>
          (Para más detalles contacte al{" "}
          <a
            className="text-secondary text-decoration-none"
            href="mailto:fenriquegimenez@gmail.com"
          >
            desarrollador
          </a>
          )
        </span>
      </p>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Link href="cobranzas">
          <button className="btn btn-secondary">Ir a Cobranzas</button>
        </Link>
        <Link href="customers">
          <button className="btn btn-secondary">Ir a Clientes</button>
        </Link>
      </div>
    </>
  )
}
export default home
