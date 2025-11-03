import { FaLeaf } from "react-icons/fa";
import { stories } from "../data";

const ContactSection = () => {
  return (
    <section id="contact" className="h-[calc(100vh-3rem)] flex flex-col gap-4 items-center justify-between">

      {/* Team */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-mytheme mb-6">
          Volunteer Stories
        </h2>

        <div className="max-w-3xl grid gap-6 w-full">
          {stories.map((story, i) => (
            <blockquote
              key={i}
              className="border-l-4 border-mytheme pl-4 italic text-gray-700"
            >
              “{story.quote}” —{" "}
              <span className="font-semibold not-italic">{story.name}</span>
            </blockquote>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start md:justify-between gap-8 bg-gray-800 text-gray-400 text-sm rounded-lg p-8'>
        <div className='flex flex-col gap-4'>
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <FaLeaf className="text-mytheme" /> CSparks
          </a>
          <p className='text-sm'>&copy; {new Date().getFullYear()} Civic Sparks</p>
          <p className='text-sm'>All rights reserved.</p>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-white'>Links</p>
          <a href="/">Home</a>
          <a href="/">Contact</a>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-white'>Contact</p>
          <a href="/">All Products</a>
          <a href="/">New Arrivals</a>
          <a href="/">Nest Sellers</a>
          <a href="/">Sale</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
