import { Award, Clock, Heart, Users } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Heart, label: "Services", value: "20+" },
  { icon: Clock, label: "Working Hours", value: "9-7" },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">About Beauty WithCare</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Beauty WithCare, where beauty meets expertise. Our professional beautician brings years of
                experience and passion to help you look and feel your absolute best.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in a wide range of beauty services including professional hair styling, precise threading,
                stunning bridal makeovers, and rejuvenating facial treatments. Every service is delivered with care,
                attention to detail, and a commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <stat.icon className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=400"
              alt="Professional beautician at work"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-gray-600">Trusted by</div>
              <div className="text-2xl font-bold text-rose-600">500+ Women</div>
              <div className="text-sm text-gray-600">in our community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
