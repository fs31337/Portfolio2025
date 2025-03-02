import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = null;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = ["home", "about", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-end space-x-6 p-4 pr-10">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollToSection(link)}
              className={`transition-opacity duration-300 ${
                activeSection === link
                  ? "opacity-100 text-black"
                  : "opacity-50 text-gray-500"
              } hover:opacity-100 hover:text-black`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
