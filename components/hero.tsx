"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Heart, Crown } from "lucide-react"
import Link from "next/link"

const floatingIcons = [
  { Icon: Sparkles, delay: 0, position: "top-20 left-10" },
  { Icon: Heart, delay: 1, position: "top-40 right-20" },
  { Icon: Crown, delay: 2, position: "bottom-40 left-20" },
  { Icon: Star, delay: 0.5, position: "bottom-20 right-10" },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div key={index} className={`absolute ${position} hidden lg:block`} style={{ animationDelay: `${delay}s` }}>
          <Icon className="h-8 w-8 text-rose-400 opacity-60 animate-float" />
        </div>
      ))}

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-rose-600 animate-fadeInUp">
                <Sparkles className="h-5 w-5 animate-pulse" />
                <span className="text-sm font-medium tracking-wide uppercase">Professional Beauty Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block animate-fadeInUp">Beauty</span>
                <span className="block gradient-text animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                  WithCare
                </span>
              </h1>

              <p
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                Transform your look with our expert beauty services. From stunning hairstyles to radiant facials, we
                bring out your natural beauty with professional care and attention.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Link href="#booking">Book Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Link href="#services">View Services</Link>
              </Button>
            </div>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-6 animate-fadeInUp"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <div className="text-gray-600">
                <span className="text-2xl font-bold text-rose-600">500+</span>
                <span className="ml-2">Happy Customers</span>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Beauty salon interior"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg animate-float">
                <div className="text-sm text-gray-600">Experience</div>
                <div className="text-2xl font-bold gradient-text">10+ Years</div>
              </div>

              <div
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-sm text-gray-600">Rating</div>
                <div className="text-2xl font-bold gradient-text">4.9★</div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full opacity-30 animate-float"></div>
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-30 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
