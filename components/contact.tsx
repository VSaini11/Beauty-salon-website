import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["JR-91 Hindalco Colony Near Building Store", "Renukoot, Uttar Pradesh 231217"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 8795629877", "Call for appointments"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@beautywithcare.com", "beautywithcare@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or want to book an appointment? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-golden transition-shadow duration-300 border-golden-700 bg-black/50">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-golden-100 rounded-full flex items-center justify-center mb-4 border border-golden-600">
                  <info.icon className="h-8 w-8 text-golden-600" />
                </div>
                <CardTitle className="text-xl text-white">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300 text-sm">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black/70 rounded-2xl shadow-golden p-8 max-w-2xl mx-auto border border-golden-700">
            <h3 className="text-2xl font-bold text-white mb-4">Visit Our Salon</h3>
            <p className="text-gray-300 mb-6">
              Experience the difference at Beauty WithCare. Our welcoming salon environment and professional services
              will leave you feeling beautiful and confident.
            </p>
            <div className="bg-golden-900/30 rounded-lg p-4 border border-golden-600">
              <p className="text-sm text-golden-300">
                <strong>Note:</strong> All appointments are subject to confirmation. We'll contact you within 24 hours
                to confirm your booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
