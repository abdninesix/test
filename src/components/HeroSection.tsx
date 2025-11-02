const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-3rem)] flex items-center justify-center text-center"
    >
      {/* Wrapper to control layout on small vs large screens */}
      <div className="relative w-full flex flex-col-reverse items-center justify-center gap-4">

        {/* Image */}
        <div className="relative w-full">
          <img
            src="/campus/1.png"
            alt="Hero"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Overlay (desktop only) */}
          <div className="hidden lg:flex absolute max-w-2xl top-1/3 left-12 flex-col p-6 items-center justify-center gap-6 rounded-xl shadow-lg bg-mytheme/80">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-100 font-extrabold">
              Let&apos;s Keep Our University Clean
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white">
              Together, we can make our campus a cleaner, greener, and healthier place for everyone.
            </p>

            <button className="bg-white cursor-pointer font-semibold rounded px-6 py-2 hover:bg-white/80">
              Donate Now
            </button>
          </div>
        </div>

        {/* Separate Text Block (mobile only) */}
        <div className="h-82 flex lg:hidden flex-col items-center justify-center gap-4 p-6 bg-mytheme rounded-xl shadow-lg">
          <h1 className="text-4xl text-gray-100 font-extrabold">
            Let&apos;s Keep Our University Clean
          </h1>

          <p className="text-white">
            Together, we can make our campus a cleaner, greener, and healthier place for everyone.
          </p>

          <button className="bg-white cursor-pointer font-semibold rounded px-6 py-2 hover:bg-white/80">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
