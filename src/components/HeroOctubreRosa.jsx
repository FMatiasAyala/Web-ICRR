export default function HeroOctubreRosa() {
  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden bg-[#FF4D94]">
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

      {/* Video principal */}
      <video
        src="/octubrerosa/octubrerosavideo.mp4"
        poster="/octubrerosa/octubrerosa.png"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Octubre Rosa: mes de concientización sobre el cáncer de mama"
        className="relative z-10 h-full w-full object-contain"
      />
    </section>
  )
}
