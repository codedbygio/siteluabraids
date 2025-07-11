"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-amber-100/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Image
                src="/images/logo-gold.png"
                alt="Studio Lua Sezio"
                width={40}
                height={40}
                className="rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-studio-gold  to-studio-terracotta rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="font-light text-2xl text-gray-800 tracking-wide">Studio</span>
              <span className="font-extralight text-2xl bg-gradient-to-r from-studio-gold via-studio-terracotta to-amber-500 bg-clip-text text-transparent ml-2">
                Lua Sezio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Início", "Sobre", "Serviços", "Galeria", "Contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative group font-light text-gray-700 hover:text-studio-terracotta transition-all duration-300"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-studio-gold to-studio-terracotta transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
            ))}
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5513996319655", "_blank")}
              className="bg-gradient-to-r from-studio-gold via-studio-terracotta to-studio-gold hover:from-studio-terracotta hover:to-studio-gold text-white font-light px-6 py-2.5 rounded-full shadow-lg hover:shadow-pink-200 transition-all duration-300 hover:scale-105"
            >
              <Heart className="mr-2 w-4 h-4" />
              Agendar
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-studio-cream transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 bg-white/95 backdrop-blur-xl rounded-b-3xl shadow-xl shadow-amber-100/20 mt-2">
            <nav className="flex flex-col space-y-4 px-4">
              {["Início", "Sobre", "Serviços", "Galeria", "Contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-studio-terracotta font-light text-left py-2 transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=5513996319655", "_blank")}
                className="bg-gradient-to-r from-studio-gold to-studio-terracotta hover:from-studio-terracotta hover:to-studio-gold text-white font-light rounded-full mt-4"
              >
                <Heart className="mr-2 w-4 h-4" />
                Agendar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
