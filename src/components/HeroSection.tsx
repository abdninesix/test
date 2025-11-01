import { FaHandHoldingHeart } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero" className="h-screen flex flex-col lg:flex-row items-center justify-center text-center">

      {/* Content */}
      <div className="flex-1 border flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold flex items-center justify-center gap-3">
          <FaHandHoldingHeart className="text-green-400" />
          Keep Our University Clean
        </h1>

        <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-700">
          Together, we can make our campus a cleaner, greener, and healthier place for everyone.
        </p>

        <button className="mt-6 bg-green-400 text-black font-semibold rounded px-6 py-3 hover:bg-green-300 transition">
          Donate Now
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 border inset-0 bg-white/50 bg-cover bg-center">Image coming soon</div>
    </section>
  );
};

export default HeroSection;
