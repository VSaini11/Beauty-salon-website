import { Award, Clock, Heart, Users } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Heart, label: "Services", value: "20+" },
  { icon: Clock, label: "Working Hours", value: "9-7" },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">About Beauty WithCare</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to Beauty WithCare, where beauty meets expertise. Our professional beautician brings years of
                experience and passion to help you look and feel your absolute best.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We specialize in a wide range of beauty services including professional hair styling, precise threading,
                stunning bridal makeovers, and rejuvenating facial treatments. Every service is delivered with care,
                attention to detail, and a commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-black/50 rounded-lg shadow-golden border border-golden-700">
                  <stat.icon className="h-8 w-8 text-golden-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
              <img
                src="../IMG_20250202_115448_hdr.jpg"
                alt="Professional beautician at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black border-golden-700 shadow-golden border p-6 rounded-xl shadow-lg">
              <div className="text-sm text-golden-400">Trusted by</div>
              <div className="text-1xl font-bold text-golden-400">500+ Women</div>
              <div className="text-sm text-golden-400">in our community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
