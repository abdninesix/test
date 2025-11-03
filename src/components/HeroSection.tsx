const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-3rem)] flex items-center justify-center text-center"
    >
      {/* Wrapper to control layout on small vs large screens */}
      <div className="relative w-full flex flex-col items-center justify-center gap-4">

        {/* Image */}
        <div className="relative w-full">
          <img
            src="/campus/1.png"
            alt="Hero"
            loading="eager"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Overlay (desktop only) */}
          <div className="hidden lg:flex absolute max-w-2xl bottom-12 right-12 flex-col p-6 items-center justify-center gap-6 rounded-xl shadow-lg bg-black/70 text-white">
            <h1 className="lg:text-6xl font-extrabold">Let&apos;s Keep Our University Clean</h1>
            <p className="text-xl">Together, we can make our campus a cleaner, greener, and healthier place for everyone.</p>
            <button className="bg-mytheme cursor-pointer font-semibold rounded px-6 py-2 hover:bg-mytheme/80">Donate Now</button>
          </div>
        </div>

        {/* Separate Text Block (mobile only) */}
        <div className="h-96 flex lg:hidden flex-col items-center justify-center gap-6 p-6 bg-mytheme text-white rounded-xl shadow-lg">
          <h1 className="text-5xl font-extrabold">Let&apos;s Keep Our University Clean</h1>
          <p>Together, we can make our campus a cleaner, greener, and healthier place for everyone.</p>
          <a href="#donate" className="bg-white text-black font-semibold rounded px-6 py-2 active:scale-105">Donate Now</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
