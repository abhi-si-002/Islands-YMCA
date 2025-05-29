"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma (Age 8)",
      content:
        "Islands YMCA Gymnastics has been incredible for my daughter. The coaches are patient, encouraging, and truly care about each child's development. Emma has gained so much confidence!",
      rating: 5,
      image: "",
    },
    {
      name: "Michael Chen",
      role: "Parent of Alex (Age 12)",
      content:
        "The competitive team program is outstanding. My son has improved tremendously and made lifelong friends. The facility is top-notch and the coaching staff is exceptional.",
      rating: 5,
      image: "",
    },
    {
      name: "Lisa Rodriguez",
      role: "Parent of Sofia (Age 5)",
      content:
        "We love the parent-tot classes! It's such a great bonding experience and Sofia is learning so much. The instructors make it fun and engaging for both kids and parents.",
      rating: 5,
      image: "",
    },
    {
      name: "David Thompson",
      role: "Parent of twins (Age 10)",
      content:
        "Both of my children attend different programs here and they absolutely love it. The variety of classes and the supportive environment make this place special.",
      rating: 5,
      image: "",
    },
    {
      name: "Amanda Wilson",
      role: "Parent of Chloe (Age 14)",
      content:
        "The tumbling classes have helped my daughter excel in cheerleading. The skills she's learned here have given her such an advantage. Highly recommend!",
      rating: 5,
      image: "",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Families Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our gymnastics families have to say about their experience at
            Islands YMCA Gymnastics.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-12">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="h-12 w-12 text-purple-500 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center mb-6">
                {(() => {
                    const hasImage = testimonials[currentTestimonial].image && testimonials[currentTestimonial].image.trim() !== "";
                    return hasImage ? (
                        <img
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                            className="w-16 h-16 rounded-full mr-4 object-cover"
                        />
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-[#00754a] text-white mr-4 flex items-center justify-center font-bold text-lg uppercase">
                            {testimonials[currentTestimonial].name?.slice(0, 2) || "NA"}
                        </div>
                    );
                })()}
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-blue-600"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-blue-600"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.content.substring(0, 120)}..."
                </blockquote>
                <div className="flex items-center">
                {(() => {
                    const hasImage = testimonial.image && testimonial.image.trim() !== "";
                    return hasImage ? (
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-[#00754a] text-white mr-4 flex items-center justify-center font-bold text-sm uppercase">
                            {testimonial.name?.slice(0, 2) || "NA"}
                        </div>
                    );
                })()}

                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready to Join Our Gymnastics Family?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Experience the difference at Islands YMCA Gymnastics. Schedule a tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200">
              Schedule a Tour
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
