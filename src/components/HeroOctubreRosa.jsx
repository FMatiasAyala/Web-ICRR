export default function HeroOctubreRosa() {
  return (
    // pb-32 / md:pb-40 = espacio que ocupan las tarjetas de AccesosRapidos (-mt-32 / md:-mt-40),
    // así se montan sobre el fondo rosa y no tapan el video
    <section className="relative overflow-hidden bg-[#FF4D94] pb-32 md:pb-40">
      {/* Fondo desenfocado para rellenar los costados sin recortar el video */}
      <video
        src="/octubrerosa/octubrerosavideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover blur-2xl scale-110 opacity-60"
      />

      {/* Video principal: en celu ocupa el ancho con su proporción (3:2); en desktop ocupa todo el alto de pantalla bajo el navbar (~9rem) */}
      <div className="relative z-10 w-full aspect-[3/2] md:aspect-auto md:h-[calc(100vh-9rem)] md:min-h-[500px]">
        <video
          src="/octubrerosa/octubrerosavideo.mp4"
          poster="/octubrerosa/octubrerosa.png"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Octubre Rosa: mes de concientización sobre el cáncer de mama"
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  )
}
