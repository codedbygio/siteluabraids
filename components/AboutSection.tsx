"use client"

import { Award, Heart, Sparkles, Users } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const stats = [
    { icon: Sparkles, label: "9+", desc: "Anos de experiência", color: "from-studio-gold to-studio-terracotta" },
    { icon: Users, label: "100+", desc: "Mulheres transformadas", color: "from-studio-terracotta to-studio-gold" },
    { icon: Award, label: "5.0", desc: "Avaliação média", color: "from-studio-gold to-studio-terracotta" },
    { icon: Heart, label: "100%", desc: "Amor pelo que fazemos", color: "from-studio-gold to-studio-terracotta" },
  ]

  return (
    <section id="sobre" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-studio-cream to-studio-gold/20 text-studio-terracotta font-light">
                <Heart className="w-4 h-4 mr-2" />
                Nossa História
              </div>

              <h2 className="text-4xl lg:text-5xl font-extralight text-gray-800 leading-tight">
                Mais que um salão,
                <span className="block bg-gradient-to-r from-studio-gold to-studio-terracotta bg-clip-text text-transparent font-light">
                  um espaço de empoderamento
                </span>
              </h2>

              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  Acreditamos que cada fio conta uma história única. Nossa missão é honrar a ancestralidade, celebrar a
                  diversidade e empoderar cada mulher que passa por aqui.
                </p>
                <p>
                  Com técnicas delicadas e um olhar contemporâneo, criamos penteados que são verdadeiras obras de arte,
                  respeitando a essência natural e feminina de cada cliente.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group p-6 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-light text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm font-light text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Brand Elements */}
            <div className="bg-gradient-to-r from-white/60 to-orange-50/60 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/tag-produtos.png"
                  alt="Tag Studio Lua Sezio"
                  width={80}
                  height={80}
                  className="rounded-2xl shadow-lg"
                />
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">Qualidade Certificada</h4>
                  <p className="text-gray-600 font-light">Produtos premium e técnicas especializadas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative animate-fade-in-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/trabalho-1.jpeg"
                    alt="Trabalho 1"
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                </div>
                <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/trabalho-5.jpeg"
                    alt="Trabalho 5"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/trabalho-2.jpeg"
                    alt="Trabalho 2"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                </div>
                <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/trabalho-6.jpeg"
                    alt="Trabalho 6"
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-studio-gold  to-studio-terracotta rounded-full animate-pulse opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-studio-terracotta to-amber-400 rounded-full animate-bounce opacity-70"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-amber-400 to-studio-gold  rounded-full animate-ping opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
