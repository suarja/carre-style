"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Square } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();
  console.log(pathName);

  function isPathActive(path: string) {
    return pathName === path;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cs-dark-darker/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex items-baseline relative">
            <span className="logo-carre text-xl group-hover:text-cs-orange transition-colors duration-300">
              CARRÉ
            </span>
            <span className="logo-style text-2xl ml-1">Style</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cs-orange group-hover:w-full transition-all duration-300"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            isActive={isPathActive("/beton-imprime")}
            href="/beton-imprime"
          >
            Béton Imprimé
          </NavLink>
          <NavLink isActive={isPathActive("/carrelage")} href="/carrelage">
            Carrelage
          </NavLink>
          <NavLink isActive={isPathActive("/contact")} href="/contact">
            Contact
          </NavLink>
        </nav>

        <Link
          href="/contact"
          className={`hidden md:flex btn btn-primary items-center transition-all duration-300 ${
            isScrolled ? "shadow-md" : "shadow-lg shadow-cs-orange/20"
          }`}
        >
          Devis Gratuit
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-cs-dark-darker/95 backdrop-blur-sm py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </MobileNavLink>
            <MobileNavLink
              isActive={isPathActive("/beton-imprime")}
              href="/beton-imprime"
              onClick={() => setIsMenuOpen(false)}
            >
              Béton Imprimé
            </MobileNavLink>
            <MobileNavLink
              isActive={isPathActive("/carrelage")}
              href="/carrelage"
              onClick={() => setIsMenuOpen(false)}
            >
              Carrelage
            </MobileNavLink>
            <MobileNavLink
              isActive={isPathActive("/contact")}
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </MobileNavLink>
            <Link
              href="/contact"
              className="btn btn-primary w-full text-center mt-2 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Devis Gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white hover:text-cs-orange font-medium relative group",
        {
          "text-cs-orange": isActive,
        }
      )}
    >
      {children}
      <div
        className={cn(
          "absolute -bottom-1 left-0 w-0 h-0.5 bg-cs-orange group-hover:w-full transition-all duration-300"
        )}
      ></div>
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
  isActive,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white hover:text-cs-orange font-medium flex items-center",
        {
          "text-cs-orange": isActive,
        }
      )}
      onClick={onClick}
    >
      <Square className="mr-2 text-cs-orange" size={8} />
      {children}
    </Link>
  );
}
