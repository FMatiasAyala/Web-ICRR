import Hero from "../components/Hero"
import VideoStack from "../components/VideoStack"
import Servicios from "../components/Servicios"
import AccesosRapidos from "../components/AccesosRapidos"
import CTA from "../components/CTA"
import SucursalesHome from "../components/SucursalesHome"
import Slogan from "../components/Slogan"
import SeoTags from "../components/SeoTags"
import Testimonials from "../components/Testimonials"
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
      <Slogan />
      <AccesosRapidos />
      <Servicios />
      <VideoStack />
      <SucursalesHome />
      <Testimonials />
      <CTA />
    </>
  )
}
