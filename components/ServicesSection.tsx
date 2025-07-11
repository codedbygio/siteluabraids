"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      name: "Boho braids",
      description: "Tranças com estilo leve e despojado, que misturam texturas, fios soltos e um toque boêmio autêntico.",
      price: "A partir de R$ 410",
      duration: "4-6 horas",
      image: "/images/trabalho-7.jpeg",
      color: "from-studio-gold to-studio-terracotta",
      features: ["Fibras premium", "Técnica delicada", "Longa duração"],
    },
    {
      name: "Nagô com cachos",
      description: "Tranças rentes ao couro cabeludo com finalização em cachos soltos, unindo estilo, elegância e leveza",
      price: "A partir de R$ 200",
      duration: "3-5 horas",
      image: "/images/trabalho-8.jpeg",
      color: "from-studio-terracotta to-studio-gold",
      features: ["Movimento natural", "Versatilidade", "Estilo moderno"],
    },
    {
      name: "Rabo com Nagô",
      description: "Tranças rentes ao couro cabeludo finalizadas em um rabo de cavalo, praticidade com um visual estiloso",
      price: "A partir de R$ 190",
      duration: "2-4 horas",
      image: "/images/trabalho-5.jpeg",
      color: "from-studio-gold to-studio-terracotta",
      features: ["Padrões únicos", "Tradição africana", "Arte ancestral"],
    },
    {
      name: "Nagô Masculina",
      description: "Tranças rentes ao couro cabeludo com desenhos personalizados, unindo estilo, identidade e atitude",
      price: "A partir de R$ 150",
      duration: "2-3 horas",
      image: "/images/trabalho-9.png",
      color: "from-studio-gold to-studio-terracotta",
      features: ["Fibras premium", "Resultado estiloso", "Padrões diferenciados"],
    },
  ]

  return (
    <section id="serviços" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-studio-cream to-studio-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-studio-gold/20 to-studio-cream rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-studio-cream to-studio-gold/20 text-studio-terracotta font-light">
            <Sparkles className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>

          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-800 leading-tight">
            Transformações
            <span className="block bg-gradient-to-r from-studio-gold to-studio-terracotta bg-clip-text text-transparent font-light">
              delicadas e femininas
            </span>
          </h2>

          <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Especializados em tranças e penteados afro com toque feminino, oferecemos uma variedade de estilos delicados
            para realçar sua beleza natural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className="group border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-200/20 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Floating Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                  <span className="text-sm font-medium text-gray-800">{service.price}</span>
                </div>

                {/* Service Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-medium text-gray-800 text-sm mb-1">{service.name}</h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="text-gray-600 font-light text-sm leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-xs font-light text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent border-studio-gold/30 text-studio-terracotta hover:bg-studio-cream font-light rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://api.whatsapp.com/send/?phone=5513996319655", "_blank")}
                >
                  <Heart className="mr-2 w-3 h-3" />
                  Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-white/60 to-pink-50/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-800 mb-4">Não encontrou o que procurava?</h3>
            <p className="text-gray-600 font-light mb-6">
              Fazemos também outros tipos de tranças e penteados personalizados. Entre em contato para uma consulta
              gratuita!
            </p>
            <Button
              className="bg-gradient-to-r from-studio-gold to-studio-terracotta hover:from-studio-gold hover:to-studio-terracotta text-white font-light px-8 py-3 rounded-full shadow-lg hover:shadow-pink-200 transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5513996319655", "_blank")}
            >
              <Sparkles className="mr-2 w-4 h-4" />
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
