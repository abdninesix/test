import { FaHandHoldingHeart } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/university-cleanup.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold flex items-center justify-center gap-3">
          <FaHandHoldingHeart className="text-green-400" />
          Keep Our University Clean
        </h1>

        <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-200">
          Together, we can make our campus a cleaner, greener, and healthier place for everyone.
        </p>

        <button className="mt-6 bg-green-400 text-black font-semibold rounded px-6 py-3 hover:bg-green-300 transition">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
