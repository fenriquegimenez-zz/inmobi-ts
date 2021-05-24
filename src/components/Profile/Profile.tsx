import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Link from "next/link"

import Button from "../Button/Button"
import Spinner from "@/components/spinner/Spinner"

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0()
  return !isLoading ? (
    isAuthenticated ? (
      <div className="d-flex justify-content-center">
        <div style={{ width: "20rem", height: "40rem" }}>
          <img
            src={user?.picture}
            alt={`${user?.name} profile picture`}
            className="card-img-top card-fluid"
          />
          <h3 className="card-title">Welcome, {user?.name}!</h3>
          <p className="card-text">{user?.email}</p>
          <Link href="cobranzas">
            <Button goToPage="Cobranzas" />
          </Link>
          <Link href="customers">
            <Button goToPage="Clientes" />
          </Link>
          <Button onClick={() => logout()} />
        </div>
      </div>
    ) : (
      <Button onClick={() => loginWithRedirect()} />
    )
  ) : (
    <Spinner />
  )
}

export default Profile
