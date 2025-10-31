import { MdEmail, MdPhone } from "react-icons/md";

const ContactSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <p>Have questions or ideas? We’d love to hear from you!</p>
      <ul>
        <li className="flex items-center gap-2">
          <MdEmail /> cleanuniversity@gmail.com
        </li>
        <li className="flex items-center gap-2">
          <MdPhone /> +92 300 1234567
        </li>
      </ul>
    </section>
  );
};

export default ContactSection;
