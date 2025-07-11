"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Instagram, MessageCircle, MapPin, Phone, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import BackToTop from "@/components/BackToTop"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("todos")

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Simplesmente apaixonada pelo trabalho da Lua! Minhas tranças ficaram perfeitas e duraram muito tempo. Profissionalismo e carinho em cada detalhe.",
      rating: 5,
      style: "Box Braids",
      image: "/images/trabalho-1.jpeg",
    },
    {
      name: "Ana Carolina",
      text: "Mais de 2 anos fazendo meu cabelo com a Lua e nunca me decepcionei. O cuidado com cada fio é impressionante. Saio sempre me sentindo uma rainha!",
      rating: 5,
      style: "Twist Loiro",
      image: "/images/trabalho-2.jpeg",
    },
    {
      name: "Juliana Santos",
      text: "O ambiente é acolhedor e a técnica é incomparável. A Lua tem um dom especial para realçar nossa beleza natural. Recomendo de olhos fechados!",
      rating: 5,
      style: "Tranças Nagô",
      image: "/images/trabalho-3.png",
    },
  ]

  const services = [
    {
      name: "Box Braids",
      description: "Proteção e estilo duradouro com técnicas profissionais",
      price: "A partir de R$ 180",
      duration: "4-6 horas",
      image: "/images/trabalho-1.jpeg",
    },
    {
      name: "Twist",
      description: "Leveza e movimento natural para todos os comprimentos",
      price: "A partir de R$ 150",
      duration: "3-5 horas",
      image: "/images/trabalho-2.jpeg",
    },
    {
      name: "Tranças Nagô",
      description: "Elegância ancestral com padrões geométricos únicos",
      price: "A partir de R$ 120",
      duration: "2-4 horas",
      image: "/images/trabalho-5.jpeg",
    },
    {
      name: "Alongamento",
      description: "Volume e comprimento dos sonhos com fibras premium",
      price: "A partir de R$ 200",
      duration: "5-7 horas",
      image: "/images/trabalho-4.jpeg",
    },
  ]

  const galleryImages = [
    { id: 1, category: "box-braids", alt: "Box Braids Escuras", src: "/images/trabalho-1.jpeg" },
    { id: 2, category: "twist", alt: "Twist Loiro Ondulado", src: "/images/trabalho-2.jpeg" },
    { id: 3, category: "tradicional", alt: "Cliente Sorridente", src: "/images/trabalho-3.png" },
    { id: 4, category: "twist", alt: "Twist Lateral Delicado", src: "/images/trabalho-4.jpeg" },
    { id: 5, category: "nago", alt: "Tranças Geométricas", src: "/images/trabalho-5.jpeg" },
    { id: 6, category: "nago", alt: "Rabo Alto Elegante", src: "/images/trabalho-6.jpeg" },
  ]

  const filteredImages =
    activeFilter === "todos" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />

      {/* Gallery Section */}
      <section id="galeria" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900">Galeria de Trabalhos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada trabalho conta uma história única. Confira alguns dos nossos penteados e se inspire para seu próximo
              visual.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: "todos", label: "Todos" },
              { key: "box-braids", label: "Box Braids" },
              { key: "twist", label: "Twist" },
              { key: "nago", label: "Nagô" },
              { key: "tradicional", label: "Tradicionais" },
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "default" : "outline"}
                size="sm"
                className={activeFilter === filter.key ? "bg-gray-900 hover:bg-gray-800" : ""}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredImages.map((image) => (
              <div key={image.id} className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900">O que dizem sobre nós</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-studio-gold rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto lg:mx-0">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div className="flex justify-center lg:justify-start">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-black fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  <div className="text-center lg:text-left">
                    <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].style}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 lg:py-32 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold">Pronta para transformar seu visual?</h2>
                <p className="text-lg text-black">+100 mulheres transformadas</p>
              </div>

              <div className="space-y-6">
                <div
                  className="flex items-center space-x-4 cursor-pointer"
                  onClick={() => window.open("https://maps.app.goo.gl/CRGwWxwswwg6TLfdA", "_blank")}
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Localização</div>
                    <div className="text-black">Praia Grande, SP - Ver no mapa</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-black">(13) 99999-9999</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-black">@studioluasezio</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Horário</div>
                    <div className="text-black">Ter-Sáb: Somente com hora marcada</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={() => window.open("https://api.whatsapp.com/send/?phone=5513996319655", "_blank")}
                  className="bg-amber-600 hover:bg-amber-600 text-white
                  "
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => window.open("https://instagram.com/studioluaseziolink", "_blank")}
                  variant="outline"
                  className="bg-amber-600 text-white hover:bg-amber-600"
                >
                  <Instagram className="mr-2 w-4 h-4" />
                  Instagram
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-playfair font-bold mb-6">Solicitar Orçamento</h3>

              <form
                  className="space-y-6"
                  action="https://formsubmit.co/giovanna.esamcsantos@gmail.com"
                  method="POST"
              >
                {/* Campo anti-spam (invisível) */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Desativa CAPTCHA */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Redireciona para uma página de agradecimento */}
                <input type="hidden" name="_next" value="/" />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input name="Nome" placeholder="Seu nome" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">WhatsApp</label>
                    <Input name="WhatsApp" placeholder="(13) 99999-9999" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <Input name="Email" type="email" placeholder="seu@email.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Serviço</label>
                  <select
                      name="Serviço"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>Selecione o serviço</option>
                    <option>Box Braids</option>
                    <option>Twist</option>
                    <option>Tranças Nagô</option>
                    <option>Alongamento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea
                      name="Mensagem"
                      placeholder="Conte-nos sobre o penteado desejado..."
                      className="min-h-[100px]"
                  />
                </div>

                <button
                    type="submit"
                    className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition"
                >
                  Enviar Solicitação
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo-gold.png" alt="Studio Lua Sezio" width={32} height={32} className="rounded-lg" />
              <span className="font-playfair text-xl font-semibold text-gray-900">Studio Lua Sezio</span>
            </div>

            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Studio Lua Sezio. Todos os direitos reservados.
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => window.open("https://instagram.com/studioluaseziolink", "_blank")}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=5513996319655", "_blank")}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <BackToTop />
      <button
        onClick={() => window.open("https://api.whatsapp.com/send/?phone=5513996319655", "_blank")}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}
