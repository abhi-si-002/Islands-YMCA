import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, Users, Trophy } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Baby,
      title: "Parent & Tot Classes",
      description: "Ages 18 months - 3 years",
      details: "Introduction to gymnastics through fun activities with parent participation",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: Users,
      title: "Recreational Classes",
      description: "Ages 3-18 years",
      details: "Skill development in a fun, non-competitive environment",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: Trophy,
      title: "Competitive Teams",
      description: "Advanced athletes",
      details: "High-level training for competitive gymnastics",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
    },
    // {
    //   icon: Star,
    //   title: "Tumbling Classes",
    //   description: "All skill levels",
    //   details: "Focus on floor skills and acrobatic movements",
    //   color: "from-gray-500 to-gray-600",
    //   bgColor: "from-gray-50 to-gray-100",
    // },
    // {
    //   icon: Clock,
    //   title: "Open Gym",
    //   description: "Practice time",
    //   details: "Supervised practice sessions for skill refinement",
    //   color: "from-purple-400 to-purple-500",
    //   bgColor: "from-purple-50 to-purple-100",
    // },
    // {
    //   icon: Heart,
    //   title: "Birthday Parties",
    //   description: "Special celebrations",
    //   details: "Memorable gymnastics-themed birthday parties",
    //   color: "from-blue-400 to-blue-500",
    //   bgColor: "from-blue-50 to-blue-100",
    // },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Our Programs & Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner to advanced, we offer comprehensive gymnastics programs designed to meet every athletes needs
            and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${service.bgColor}`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{service.details}</p>
                  <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold`}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Class Schedule CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Gymnastics Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            View our class schedules and find the perfect program for you or your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
              View Schedule
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600 font-semibold px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
