import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";

const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "usage", label: "Funds" },
    { id: "gallery", label: "Gallery" },
    { id: "donate", label: "Donate" },
    { id: "testimonials", label: "Stories" },
    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const { offsetTop, offsetHeight } = el;
                    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                        setActive(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="sticky top-0 px-2 py-4 flex items-center justify-between bg-gray-100/95 shadow-md rounded-xl z-20">
            <div className="flex items-center gap-2 font-bold text-xl">
                <FaLeaf /> Clean Campus
            </div>

            <ul className="flex gap-6 font-medium">
                {sections.map((section) => (
                    <li key={section.id}>
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className={`transition-colors ${active === section.id ? "text-green-600" : "text-gray-600"
                                }`}
                        >
                            {section.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
