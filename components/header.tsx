"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-golden py-2" : "bg-gradient-to-r from-black/20 to-golden-900/20 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="../WhatsApp Image 2025-08-17 at 19.54.37_816c555f.jpg"
                alt="Beauty WithCare Logo"
                className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110 animate-pulse-glow"
              />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-golden-400 animate-float" />
            </div>
            <div className="animate-slideInLeft">
              <h1 className="text-2xl font-bold gradient-text">Beauty WithCare</h1>
              <p className="text-sm text-golden-400 font-medium">Professional Beauty Salon</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {["Home", "Services", "About", "Certifications", "Booking", "Contact"].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white hover:text-golden-400 transition-all duration-300 group py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-golden-400 to-golden-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-golden-400 to-golden-600 hover:from-golden-500 hover:to-golden-700 text-black px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-golden animate-shimmer font-bold"
            >
              <Link href="#booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative overflow-hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative z-10">
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-golden-400 to-golden-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-4 pb-6 border-t border-golden-700 mt-4">
            <div className="flex flex-col space-y-4">
              {["Home", "Services", "About", "Certifications", "Booking", "Contact"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-golden-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-golden-900/20 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </Link>
              ))}
              <Button asChild className="bg-gradient-to-r from-golden-400 to-golden-600 text-black mt-4 rounded-full font-bold hover:from-golden-500 hover:to-golden-700">
                <Link href="#booking" onClick={() => setIsMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
