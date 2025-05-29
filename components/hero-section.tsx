import { Button } from "@/components/ui/button"
import { Star, Users, Award, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen  mt-15 flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300/15 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-green-300/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl pt-5 md:text-6xl font-bold mb-6 leading-tight">
              Flip Into
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Amazing
              </span>
              Gymnastics!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Join Islands YMCA Gymnastics in Savannah, GA for world-class training, fun programs, and a supportive
              community that helps every gymnast reach their potential.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 mx-auto mb-2 text-white" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Happy Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="h-8 w-8 mx-auto mb-2 text-white" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="h-8 w-8 mx-auto mb-2 text-white" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Awards Won</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-white" />
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm">Days a Week</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-600 font-semibold px-8 py-3"
              >
                Watch Classes
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <img
                src="https://www.wsav.com/wp-content/uploads/sites/75/2022/08/beam2.jpg?w=900"
                alt="Gymnast performing"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center animate-spin-slow">
              <Star className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
