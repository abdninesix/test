import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-mytheme mb-4">
        Contact Us
      </h2>
      <p className="text-gray-700 text-base sm:text-lg max-w-lg mb-6">
        Have a question, idea, or want to collaborate? We&apos;d love to hear from you!
      </p>

      <ul className="space-y-3 text-gray-800">
        <li className="flex items-center justify-center gap-2">
          <MdEmail className="text-mytheme" /> something@something.com
        </li>
        <li className="flex items-center justify-center gap-2">
          <MdPhone className="text-mytheme" /> +92 300 1234567
        </li>
        <li className="flex items-center justify-center gap-2">
          <MdLocationOn className="text-mytheme" /> UET, Peshawar
        </li>
      </ul>
    </section>
  );
};

export default ContactSection;
