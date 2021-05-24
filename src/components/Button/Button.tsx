import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Button = ({ goToPage, onClick, outline }: any) => {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="text-center my-2">
      <button
        onClick={onClick}
        className={`btn btn${outline ? "-outline" : ""}-secondary`}
      >
        {goToPage
          ? `Ir a ${goToPage}`
          : isAuthenticated
          ? "Cerrar sesión"
          : "Iniciar Sesión"}
      </button>
    </div>
  )
}

export default Button
