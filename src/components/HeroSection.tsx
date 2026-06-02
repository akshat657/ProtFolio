export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center text-center px-6 py-[90px]">

      <h1
        className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-7xl animate-fade-rise"
        style={{
          fontFamily: "'Instrument Serif', serif",
          letterSpacing: '-2.46px',
        }}
      >
        Where{' '}
        <em className="not-italic text-muted-foreground">dreams</em>
        {' '}rise{' '}
        <em className="not-italic text-muted-foreground">through the silence.</em>
      </h1>

      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
        We're designing tools for deep thinkers, bold creators, and quiet rebels.
        Amid the chaos, we build digital spaces for sharp focus and inspired work.
      </p>

      <button className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] transition-transform animate-fade-rise-delay-2 cursor-pointer">
        Begin Journey
      </button>

    </section>
  )
}
