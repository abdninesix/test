import { useState, useEffect } from "react";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

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
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // close menu on mobile after click
    };

    return (
        <nav className="sticky top-2 px-3 py-4 flex items-center justify-between bg-gray-100/95 shadow-md rounded-xl z-20">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-xl">
                <FaLeaf className="text-green-600" /> CSparks
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-6 font-medium text-sm">
                {sections.map((section) => (
                    <li key={section.id}>
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className={`cursor-pointer uppercase transition-colors ${active === section.id ? "text-green-600" : "text-gray-600"
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
                <div className="absolute top-full left-0 w-full bg-gray-100 shadow-md rounded-b-xl md:hidden">
                    <ul className="flex flex-col items-center gap-4 py-4 font-medium">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block text-lg transition-colors ${active === section.id ? "text-green-600" : "text-gray-700"
                                        }`}
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
