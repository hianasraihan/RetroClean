"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll smooth
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  // Observer to set active section
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          setActiveLink(id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center pl-2">
          <img
            src="/logo1.png" // pastikan file ini ada di folder /public/
            alt="Logo"
            className="h-11 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                className={`hover:text-teal-700 ${
                  activeLink === item.href ? "font-semibold" : ""
                }`}
              >
                {item.name}
              </a>
              {activeLink === item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#008080] rounded-full transition-all duration-300" />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden px-4 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => {
                  setActiveLink(item.href);
                  setIsOpen(false);
                }}
                className={`block py-1 border-b border-gray-200 transition-all duration-300 ${
                  activeLink === item.href ? "text-teal-700 font-semibold" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
