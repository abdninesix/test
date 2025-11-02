const HeroSection = () => {
  return (
    <section
      id="hero" className="h-[calc(100vh-3rem)] flex flex-col lg:flex-row items-center justify-center gap-4 text-center">

      {/* Content */}
      <div className="flex-1 flex flex-col p-9 items-center justify-center gap-6 rounded-xl shadow-lg bg-mytheme">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-100 font-extrabold flex items-center justify-center gap-3">
          Let&apos;s Keep Our University Clean
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white">
          Together, we can make our campus a cleaner, greener, and healthier place for everyone.
        </p>

        <button className="bg-white cursor-pointer font-semibold rounded px-6 py-2 hover:bg-white/80">
          Donate Now
        </button>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img src="/campus/1.png" alt="Hero" className="w-full h-full object-cover rounded-xl" />
      </div>
    </section>
  );
};

export default HeroSection;
