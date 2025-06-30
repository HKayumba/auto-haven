"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="font-montserrat font-medium text-[var(--auto-haven-blue)] hover:text-[var(--auto-haven-red)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="bg-[var(--auto-haven-red)] hover:bg-red-700 text-white">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--auto-haven-blue)]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-[72px] animate-fade-in">
          <ul className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="block font-montserrat font-medium text-[var(--auto-haven-blue)] hover:text-[var(--auto-haven-red)] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button className="w-full bg-[var(--auto-haven-red)] hover:bg-red-700 text-white mt-4">
                Get a Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
