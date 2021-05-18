import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import React from "react"

type LayoutChild = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: LayoutChild) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
export default AppLayout
