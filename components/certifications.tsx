"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Star, CheckCircle, Trophy, Upload, Eye, Download, FileText } from "lucide-react"

const certifications = [
  {
    icon: Award,
    title: "Nail Extension and Nail Art Certificate",
    issuer: "Navyug Digital Private Limited",
    year: "2023",
    pdfPath: "/Nandi b Academy Private _20250625_120651_0000.pdf",
    imagePath: "/Nail image.jpg", // Example PDF from your public folder
  },
  {
    icon: Star,
    title: "Professional Beautician and Makeup Certificate",
    issuer: "Navyug Digital Private Limited",
    year: "2022",
    description: "Specialized training in modern hair cutting techniques, coloring, and advanced styling methods.",
    pdfPath: "/Nandi b Academy Private _20250709_153407_0000.pdf",
    imagePath: "/Beautician.jpg", // Example PDF from your public folder
  },
  
  {
    icon: Trophy,
    title: "Hair Treatment Certificate",
    issuer: "Navyug Digital Private Limited",
    year: "2024",
    description: "Professional certification in haircare, hairstyling, and advanced hair treatment services.",
    pdfPath: "/Hair Treatment Certificate.pdf",
    imagePath: "/Hair Treatment Certificate_page-0001.jpg", // No PDF uploaded yet
  },
  {
    icon: Trophy,
    title: "Advance Beautician & Hair Dressing Certificate",
    issuer: "Kayakalp Beauty Parlour, Mahendragarh, Haryana",
    year: "2000",
    description: "One-year professional certification in Hair Dressing & Beautician Course (Basic to Advance), including Makeup and Hair Styling. Successfully completed with A Grade performance.",
    imagePath: "/WhatsApp Image 2026-01-12 at 20.29.17.jpeg", // No PDF uploaded yet
  },
]

export function Certifications() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([])

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

  const handleFileUpload = (index: number, file: File) => {
    if (file.type === "application/pdf") {
      setUploadingIndex(index)
      // Here you would typically upload the file to your server
      // For demo purposes, we'll just simulate the upload
      setTimeout(() => {
        setUploadingIndex(null)
        // Update the certification with the new PDF path
        // In a real app, you'd update your database/state management
        console.log(`PDF uploaded for certification ${index}:`, file.name)
      }, 2000)
    } else {
      alert("Please upload a PDF file only")
    }
  }

  const handleViewPDF = (pdfPath: string) => {
    if (pdfPath) {
      window.open(pdfPath, '_blank')
    }
  }

  const handleDownloadPDF = (pdfPath: string, title: string) => {
    if (pdfPath) {
      const link = document.createElement('a')
      link.href = pdfPath
      link.download = `${title}.pdf`
      link.click()
    }
  }

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-golden-400 rounded-full opacity-10 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-golden-600 rounded-full opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-golden-500 rounded-full opacity-15 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our expertise is backed by professional certifications and continuous education in the latest beauty techniques
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
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
              <Card className="group hover:shadow-golden transition-all duration-500 border border-golden-700 bg-black/80 backdrop-blur-sm hover:scale-105 overflow-hidden relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-golden-400/5 to-golden-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-6 relative z-10 flex flex-col h-full">
                  {/* PDF Display Area */}
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48 border-2 border-dashed border-golden-600 bg-black/30">
                    {cert.imagePath ? (
                      <div className="w-full h-full relative">
                        {/* PDF Preview Frame */}
                        <img
                          src={cert.imagePath}
                          alt={cert.title}
                          className="w-full h-full object-contain cursor-pointer"
                          
                        />
                        {/* Overlay for interaction */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        {/* Certificate label */}
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="bg-black/80 backdrop-blur-sm rounded px-2 py-1">
                            <span className="text-xs text-golden-300 font-medium">Certificate Preview</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <Upload className="h-8 w-8 text-gray-500 mb-2" />
                        <span className="text-xs text-gray-400 text-center px-2">Upload PDF Certificate</span>
                      </div>
                    )}
                    
                   
                  </div>

                  {/* PDF Action Buttons */}
                  {cert.pdfPath && (
                    <div className="flex gap-2 mb-4">
                      
                      
                    </div>
                  )}

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-golden-400/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-golden-600">
                      <cert.icon className="h-8 w-8 text-golden-400 group-hover:text-golden-300 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-golden-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-golden-400 font-medium text-sm mb-1">{cert.issuer}</p>
                      <p className="text-golden-300 text-sm mb-3">Year: {cert.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-black/50 rounded-2xl border border-golden-700 hover:shadow-golden transition-all duration-300">
            <div className="text-3xl font-bold text-golden-400 mb-2">15+</div>
            <div className="text-gray-300 text-sm">Certifications</div>
          </div>
          <div className="text-center p-6 bg-black/50 rounded-2xl border border-golden-700 hover:shadow-golden transition-all duration-300">
            <div className="text-3xl font-bold text-golden-400 mb-2">10+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-black/50 rounded-2xl border border-golden-700 hover:shadow-golden transition-all duration-300">
            <div className="text-3xl font-bold text-golden-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-black/50 rounded-2xl border border-golden-700 hover:shadow-golden transition-all duration-300">
            <div className="text-3xl font-bold text-golden-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
