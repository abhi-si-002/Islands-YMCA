"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { src: "https://www.montgomeryadvertiser.com/gcdn/-mm-/13355246763a5832678db79a7bc3dc629205bc95/c=380-0-2495-1195/local/-/media/Montgomery/Montgomery/2014/08/09/1407630131001-9gym2.jpg?width=2115&height=1195&fit=crop&format=pjpg&auto=webp", alt: "", type: "image" },
    { src: "https://www.mtrymca.org/sites/mtrymca_d10/files/styles/hero_banner_mobile/public/2024-10/501508838.jpg.webp?itok=1AJ7CyDC", alt: "", type: "image" },
    { src: "https://s3.amazonaws.com/recliquecore-imagestack/moultrie/uploads/2023/12/22/wW8Qb08pSTeAGN4bUQAZ_H23wW4Xh8yi7rlo.JPG", alt: "", type: "image" },
    { src: "https://reclique-core-savannah.s3.amazonaws.com/wp-content/uploads/2025/03/27122330/0123436.jpeg", alt: "", type: "image" },
    { src: "https://reclique-core-savannah.s3.amazonaws.com/wp-content/uploads/2023/12/12083508/FB_IMG_1702142836081.jpg", alt: "Team celebration", type: "image" },
    { src: "https://s3.amazonaws.com/bargainhunter/images/articles/ymca-gymnastics-team-to-compete-at-nationals/pv_web.jpg?mtime=202306190911111.jpg", alt: "Team celebration", type: "image" },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gallery & Highlights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our amazing facility, talented gymnasts, and memorable moments that make Islands YMCA
            Gymnastics special.
          </p>
        </div>

        {/* Featured Image Carousel */}
        <div className="relative mb-12">
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={images[currentImage].src || "/placeholder.svg"}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover"
            />
            {images[currentImage].type === "video" && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                  <Play className="h-8 w-8 mr-2" />
                  Play Video
                </Button>
              </div>
            )}

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImage ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative h-24 md:h-32 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 ${
                index === currentImage ? "ring-4 ring-blue-500" : ""
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              {image.type === "video" && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="h-6 w-6 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">15+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Years of Excellence</h3>
            <p className="text-gray-600">Serving Savannah community</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">500+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Happy Students</h3>
            <p className="text-gray-600">Active gymnasts</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">50+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Awards Won</h3>
            <p className="text-gray-600">Competition achievements</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">10+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Expert Coaches</h3>
            <p className="text-gray-600">Certified professionals</p>
          </div>
        </div>
      </div>
    </section>
  )
}
