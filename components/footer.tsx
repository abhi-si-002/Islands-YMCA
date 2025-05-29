import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Islands YMCA Gymnastics
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Inspiring excellence in gymnastics through quality instruction, character development, and a commitment to
              helping every athlete reach their full potential in Savannah, GA.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Savannah, GA</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">(912) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@islandsymcagymnastics.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs & Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-300">Programs</h4>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-300">Parent & Tot Classes</li>
              <li className="text-gray-300">Recreational Classes</li>
              <li className="text-gray-300">Competitive Teams</li>
              <li className="text-gray-300">Tumbling Classes</li>
              <li className="text-gray-300">Birthday Parties</li>
            </ul>

            <h4 className="text-xl font-semibold mb-4 text-blue-300">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm">Mon-Fri: 9AM-8PM</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm">Sat: 9AM-5PM</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm">Sun: 12PM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Islands YMCA Gymnastics. All rights reserved. |<span className="text-blue-400"> Privacy Policy</span>{" "}
            |<span className="text-blue-400"> Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
