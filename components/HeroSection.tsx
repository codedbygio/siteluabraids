"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Star, ArrowRight, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
      <section
          id="início"
          className="relative min-h-screen flex items-center overflow-x-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-studio-cream to-studio-gold/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-studio-gold/20 to-studio-terracotta/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-amber-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
              <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
              >
                {i % 3 === 0 && <Heart className="w-4 h-4 text-studio-gold/60 opacity-60" />}
                {i % 3 === 1 && <Sparkles className="w-3 h-3 text-studio-terracotta/60 opacity-60" />}
                {i % 3 === 2 && <Star className="w-3 h-3 text-amber-300 opacity-60" />}
              </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo Esquerdo */}
            <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
              <div className="space-y-6">
                <div className="mt-16 sm:mt-0 flex justify-center lg:justify-start">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-studio-cream to-studio-gold/20 text-studio-terracotta font-light backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                    Mais de 9 anos empoderando mulheres
                  </div>
                </div>


                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extralight text-gray-800 leading-tight">
                  Sua beleza
                  <span className="block bg-gradient-to-r from-studio-gold via-studio-terracotta to-studio-cream bg-clip-text text-transparent font-light">
                  natural
                </span>
                  <span className="block font-thin text-2xl sm:text-3xl lg:text-5xl text-gray-600 mt-2">
                  em primeiro lugar
                </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Entre fios, formas e cores, devolvemos o brilho que nunca deveria ter sido apagado. Um espaço feminino e
                  acolhedor para sua transformação.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                    size="lg"
                    onClick={() => scrollToSection("galeria")}
                    className="w-full sm:w-auto bg-gradient-to-r from-studio-gold via-studio-terracotta to-studio-gold hover:from-studio-terracotta hover:to-studio-gold text-white font-light px-8 py-4 text-base rounded-full shadow-lg hover:shadow-pink-200 transition-all duration-300 hover:scale-105 group"
                >
                  Ver Transformações
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open("https://api.whatsapp.com/send/?phone=5513996319655", "_blank")}
                    className="w-full sm:w-auto border-studio-gold/30 text-studio-terracotta hover:bg-studio-cream font-light px-8 py-4 text-base rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-studio-gold to-studio-terracotta border-2 border-studio-cream shadow-sm"
                        />
                    ))}
                  </div>
                  <span className="text-sm font-light text-gray-600">+100 mulheres transformadas</span>
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                      <Star
                          key={i}
                          className="w-4 h-4 text-studio-gold fill-current animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                      />
                  ))}
                  <span className="text-sm font-light text-gray-600 ml-2">5.0 estrelas</span>
                </div>
              </div>
            </div>

            {/* Imagem Direita */}
            <div className="relative animate-fade-in-right">
              <div className="relative group">
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-amber-100/20 z-10 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-studio-gold to-studio-terracotta flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Técnicas Delicadas</p>
                      <p className="text-xs text-gray-600 font-light">Cuidado em cada fio</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-orange-100/20 z-10 animate-float animation-delay-2000">
                  <div className="flex items-center space-x-3">
                  </div>
                </div>

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-studio-gold/30 group-hover:shadow-studio-terracotta/40 transition-all duration-500">
                  <Image
                      src="/images/trabalho-3.png"
                      alt="Studio Lua Sezio - Transformação Principal"
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                      priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-terracotta/20 via-studio-gold/10 to-transparent"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-medium text-gray-800">✨ Trabalho em destaque</p>
                      <p className="text-sm text-gray-600 font-light">Tranças delicadas e femininas</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-studio-gold to-studio-terracotta rounded-full animate-pulse opacity-70"></div>
                <div className="absolute bottom-20 left-4 w-4 h-4 bg-gradient-to-r from-studio-terracotta to-studio-gold rounded-full animate-bounce opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-studio-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-studio-gold to-studio-terracotta rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
  )
}
