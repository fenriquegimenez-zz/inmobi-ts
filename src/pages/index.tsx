import React from "react"
import Link from "next/dist/client/link"

import Profile from "@/components/Profile/Profile"

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

      <Profile />
    </>
  )
}
export default home
