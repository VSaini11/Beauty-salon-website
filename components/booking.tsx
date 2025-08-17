"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const services = [
  "Hair Cutting & Styling",
  "Hair Coloring",
  "Hair Treatment",
  "Eyebrow Threading",
  "Upper Lip Threading",
  "Full Face Threading",
  "Bridal Makeup",
  "Bridal Hair Styling",
  "Mehendi",
  "Deep Cleansing Facial",
  "Anti-aging Facial",
  "Hydrating Facial",
  "Acne Treatment Facial",
]

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
]

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    console.log("Booking component mounted") // ✅ Debug log
    setIsVisible(true)
  }, [])

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      access_key: "3ab77e80-0681-4b4c-9c88-6c254264c2c4", // 🔑 Replace with your real access key
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      date: formData.date,
      time: formData.time,
      notes: formData.notes,
      subject: "New Appointment Booking", // Optional
    }),
  })

  const result = await response.json()
  setIsSubmitting(false)

  if (result.success) {
    toast({
      title: "Appointment Booked! ✨",
      description: "We'll contact you soon to confirm your appointment.",
    })

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    })
  } else {
    toast({
      title: "Error 😓",
      description: "Something went wrong. Please try again.",
      variant: "destructive"
    })
  }
}

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid =
    formData.name && formData.phone && formData.email && formData.service && formData.date && formData.time

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-golden-900 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-golden-300 to-golden-500 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-golden-400 to-golden-600 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-golden-400 mr-2 animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Book Your <span className="gradient-text">Appointment</span>
            </h2>
            <Sparkles className="h-8 w-8 text-golden-400 ml-2 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Schedule your beauty session with us. Choose your preferred service and time slot.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <Card className="shadow-golden border border-golden-700 bg-black/90 backdrop-blur-sm overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-r from-golden-400 to-golden-600 text-black relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
              <CardTitle className="text-3xl font-bold relative z-10">Schedule Appointment</CardTitle>
              <CardDescription className="text-black/80 text-lg relative z-10 font-semibold">
                Fill in your details and we'll get back to you to confirm your booking
              </CardDescription>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </CardHeader>

            <CardContent className="p-8 bg-black/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="name" className="flex items-center gap-2 text-golden-400 font-medium">
                      <User className="h-5 w-5 text-golden-500 group-hover:scale-110 transition-transform duration-300" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="border-2 border-golden-600 focus:border-golden-400 transition-all duration-300 rounded-xl py-3 bg-black/70 text-white placeholder-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-golden-400 font-medium">
                      <Phone className="h-5 w-5 text-golden-500 group-hover:scale-110 transition-transform duration-300" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="border-2 border-golden-600 focus:border-golden-400 transition-all duration-300 rounded-xl py-3 bg-black/70 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <Label htmlFor="email" className="flex items-center gap-2 text-golden-400 font-medium">
                    <Mail className="h-5 w-5 text-golden-500 group-hover:scale-110 transition-transform duration-300" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    className="border-2 border-golden-600 focus:border-golden-400 transition-all duration-300 rounded-xl py-3 bg-black/70 text-white placeholder-gray-400"
                    required
                  />
                </div>

                <div className="space-y-3 group">
                  <Label className="flex items-center gap-2 text-golden-400 font-medium">
                    <Sparkles className="h-5 w-5 text-golden-500 group-hover:scale-110 transition-transform duration-300" />
                    Select Service
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="border-2 border-golden-600 focus:border-golden-400 transition-all duration-300 rounded-xl py-3 bg-black/70 text-white">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {services.map((service) => (
                        <SelectItem
                          key={service}
                          value={service}
                          className="hover:bg-golden-50 transition-colors duration-200"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="date" className="flex items-center gap-2 text-golden-400 font-medium">
                      <Calendar className="h-5 w-5 text-golden-500 group-hover:scale-110 transition-transform duration-300" />
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="border-2 border-golden-600 focus:border-golden-400 transition-all duration-300 rounded-xl py-3 bg-black/70 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-3 group">
                    <Label className="flex items-center gap-2 text-golden-400 font-medium">
                      <Clock className="h-5 w-5 text-golden-500 group-hover:scale-110 transition-transform duration-300" />
                      Preferred Time
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger className="border-2 border-golden-600 focus:border-golden-400 transition-all duration-300 rounded-xl py-3 bg-black/70 text-white">
                        <SelectValue placeholder="Choose time slot" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {timeSlots.map((time) => (
                          <SelectItem
                            key={time}
                            value={time}
                            className="hover:bg-golden-50 transition-colors duration-200"
                          >
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="notes" className="text-golden-400 font-medium">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any special requests or notes..."
                    rows={4}
                    className="border-2 border-golden-600 focus:border-golden-400 transition-all duration-300 rounded-xl resize-none bg-black/70 text-white placeholder-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-500 transform ${
                    isFormValid && !isSubmitting
                      ? "bg-gradient-to-r from-golden-400 to-golden-600 hover:from-golden-500 hover:to-golden-700 hover:scale-105 hover:shadow-golden text-black"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-2"></div>
                      Booking Appointment...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 mr-2" />
                      Book Appointment
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
