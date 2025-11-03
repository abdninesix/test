import { FaLeaf } from "react-icons/fa";
import { sections, stories } from "../data";
import Logo from "./Logo";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-[calc(100vh-3rem)] flex flex-col gap-10 items-center justify-between">

      {/* Team */}
      <div className="min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-mytheme mb-8">
          Volunteers
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {stories.map((story, i) => (
            <div
              key={i}
              className="h-48 flex items-center gap-4 bg-gray-100 rounded-2xl shadow-md hover:scale-105 p-4 duration-300"
            >
              <img
                src={story.image}
                alt={story.name}
                className="size-24 rounded-full object-cover border-2 border-mytheme"
              />
              <div className="">
                <h3 className="text-lg font-semibold text-gray-800">
                  {story.name}
                </h3>
                <p className="text-gray-600 italic text-sm">
                  “{story.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className='w-full grid grid-cols-1 md:grid-cols-3 items-start md:justify-between gap-8 bg-gray-800 text-gray-400 text-sm rounded-lg p-8 mb-8'>
        <div className='flex flex-col gap-4'>
          <a href="#hero" className="flex items-center gap-2 font-bold text-xl">
            <FaLeaf className="text-mytheme" /> CSparks
          </a>
          <p className='text-sm'>&copy; {new Date().getFullYear()} Civics Sparks</p>
          <p className='text-sm'>All rights reserved.</p>
          <p className="flex items-center text-white">
            Developed by Abdullah at&nbsp;
            <a href="https://abify.vercel.app" target="_noblank" className="text-white"><Logo /></a>
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-white'>Links</p>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>{section.label}</a>
          ))}
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-white'>Contact</p>
          <a href="/">+92 123 456 789</a>
          <a href="/">something@something.com</a>
          <a href="/">UET, Peshawar</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
