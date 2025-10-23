import React from "react"
import Hero from "../components/Hero"
import VideoStack from "../components/VideoStack"
import Servicios from "../components/Servicios"
import AccesosRapidos from "../components/AccesosRapidos"
import CTA from "../components/CTA"
import SucursalesHome from "../components/SucursalesHome"
import Slogan from "../components/Slogan"
import SeoTags from "../components/SeoTags"

export default function Home() {
  return (
    <>
      <SeoTags
        title=" Inicio | ICRR"
        description="Centro especializado en diagnóstico por imágenes, resonancias, tomografías, ecografías y mamografías. Atención profesional en Resistencia, Chaco."
        image="/logos/icrr_logo2.jpg"
      />
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
