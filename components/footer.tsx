"use client"

import { Heart, Sparkles, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-golden-400 via-golden-500 to-golden-600"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-golden-400/20 to-golden-600/20 rounded-full animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-golden-500/20 to-golden-700/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6 animate-fadeInUp">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="../WhatsApp Image 2025-08-17 at 19.54.37_816c555f.jpg"
                  alt="Beauty WithCare Logo"
                  className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110"
                />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-golden-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Beauty WithCare</h3>
                <p className="text-sm text-gray-400">Professional Beauty Salon</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Enhancing your natural beauty with professional care and expertise. Your trusted partner for all beauty
              needs.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-golden-500/20 hover:text-golden-400 transition-all duration-300 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-golden-500/20 hover:text-golden-400 transition-all duration-300 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Booking", "Contact"].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-golden-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-xl font-semibold text-white">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Hair Styling & Cutting",
                "Threading Services",
                "Bridal Packages",
                "Facial Treatments",
                "Hair Treatments",
              ].map((service, index) => (
                <li
                  key={service}
                  className="text-gray-400 hover:text-golden-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <h4 className="text-xl font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-golden-400 transition-colors duration-300">
                <MapPin className="h-5 w-5 text-golden-400" />
                <span className="text-sm"> JR-91 Hindalco Colony Near Building Store, Renukoot, Uttar Pradesh 231217</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-golden-400 transition-colors duration-300">
                <Phone className="h-5 w-5 text-golden-400" />
                <span className="text-sm">+91 8795629877</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-golden-400 transition-colors duration-300">
                <Mail className="h-5 w-5 text-golden-400" />
                <span className="text-sm">info@beautywithcare.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-golden-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center gap-2 animate-fadeInUp">
              Made with <Heart className="h-4 w-4 text-golden-500 fill-current animate-pulse" /> for Beauty WithCare
            </p>
            <p className="text-gray-500 text-xs animate-fadeInUp">© 2024 Beauty WithCare. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
