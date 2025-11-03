import { useState, useEffect } from "react";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { sections } from "../data";

const Navbar = () => {
    const [active, setActive] = useState("hero");
    const [menuOpen, setMenuOpen] = useState(false);

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
        if (!el) return;
        const yOffset = -64;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 h-12 px-2 flex items-center justify-between bg-gray-100/95 shadow-lg rounded-xl z-20">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-xl">
                <FaLeaf className="text-mytheme" /> CSparks
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-6 font-medium text-sm">
                {sections.map((section) => (
                    <li key={section.id}>
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className={`cursor-pointer uppercase transition-colors ${active === section.id ? "text-mytheme" : "text-gray-600"
                                }`}
                        >
                            {section.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Mobile Toggle */}
            <button
                className="lg:hidden text-gray-700 text-2xl"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-100/95 shadow-md rounded-xl md:hidden">
                    <ul className="flex flex-col items-center gap-4 py-4 font-medium">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block text-lg duration-500 ${active === section.id ? "text-mytheme" : "text-gray-700"}`}
                                >
                                    {section.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
