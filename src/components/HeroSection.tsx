import { FaHandHoldingHeart } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <FaHandHoldingHeart /> Keep Our University Clean
        </h1>
        <p className="text-lg text-gray-600">
          Join us in creating a cleaner, greener, and more inspiring campus.
        </p>
        <button className="bg-yellow-400 text-black font-semibold rounded">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
