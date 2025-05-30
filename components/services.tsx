"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Sparkles, Crown, Flower, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Professional haircuts, styling, coloring, and treatments for all hair types.",
    features: ["Haircuts & Styling", "Hair Coloring", "Hair Treatments", "Blow Dry"],
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Sparkles,
    title: "Threading",
    description: "Precise eyebrow and facial hair threading for perfectly shaped brows.",
    features: ["Eyebrow Threading", "Upper Lip Threading", "Chin Threading", "Full Face Threading"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Crown,
    title: "Bridal Services",
    description: "Complete bridal makeover packages for your special day.",
    features: ["Bridal Makeup", "Hair Styling", "Mehendi", "Pre-wedding Treatments"],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Flower,
    title: "Facial Treatments",
    description: "Rejuvenating facial treatments for glowing, healthy skin.",
    features: ["Deep Cleansing Facial", "Anti-aging Facial", "Hydrating Facial", "Acne Treatment"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
]

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Beauty Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              data-index={index}
              className={`transform transition-all duration-700 ${
                visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center relative z-10">
                  <div
                    className={`mx-auto w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                  >
                    <service.icon className="h-10 w-10 text-gray-700 group-hover:text-white transition-colors duration-500 relative z-10" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-rose-50 transition-all duration-300 text-rose-600 hover:text-rose-700"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
