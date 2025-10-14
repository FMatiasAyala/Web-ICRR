import React from "react"
import Hero from "../components/Hero"
import VideoStack from "../components/VideoStack"
import Servicios from "../components/Servicios"
import AccesosRapidos from "../components/AccesosRapidos"
import CTA from "../components/CTA"
import SucursalesHome from "../components/SucursalesHome"
import Slogan from "../components/Slogan"

export default function Home() {
  return (
    <>
      <Slogan />
      <AccesosRapidos />
      <Hero />
      <Servicios />
      <VideoStack />
      <SucursalesHome />
      <CTA />
    </>
  )
}
