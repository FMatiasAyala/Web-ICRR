// import Hero from "../components/Hero"
// Campaña Octubre Rosa: hero temporal
import HeroOctubreRosa from "../components/HeroOctubreRosa"
import VideoStack from "../components/VideoStack"
import Servicios from "../components/Servicios"
import AccesosRapidos from "../components/AccesosRapidos"
import CTA from "../components/CTA"
import SucursalesHome from "../components/SucursalesHome"
// Hero original (desactivado durante Octubre Rosa)
// import Slogan from "../components/Slogan"
import SeoTags from "../components/SeoTags"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import { organizationSchema, websiteSchema, allSucursalesSchema } from "../config/structuredData"

export default function Home() {
  return (
    <>
      <SeoTags
        title="Diagnóstico por Imágenes en Resistencia, Chaco | ICRR"
        description="Centro especializado en diagnóstico por imágenes: resonancias, tomografías, ecografías, mamografías y densitometrías. Atención profesional en Resistencia, Chaco. Reservá tu turno."
        image="/logos/icrr_logo2.jpg"
        path="/"
        keywords="diagnóstico por imágenes Resistencia, resonancia magnética Chaco, tomografía, ecografía, mamografía, densitometría, ICRR"
        jsonLd={[organizationSchema(), websiteSchema(), ...allSucursalesSchema()]}
      />
      {/* Hero original — descomentar al terminar Octubre Rosa y quitar <HeroOctubreRosa /> */}
      {/* <Slogan /> */}
      <HeroOctubreRosa />
      <AccesosRapidos />
      <Servicios />
      <VideoStack />
      <SucursalesHome />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  )
}
