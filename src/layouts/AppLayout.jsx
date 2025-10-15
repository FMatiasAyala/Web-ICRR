import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[60vh] bg-gray-50 text-gray-800">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default AppLayout
