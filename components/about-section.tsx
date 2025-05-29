import { Target, Heart, Trophy, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Our Gymnastics Center
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Islands YMCA Gymnastics, we're dedicated to fostering physical fitness, mental strength, and character
            development through the art of gymnastics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://reclique-core-savannah.s3.amazonaws.com/wp-content/uploads/2025/03/27122330/0123436.jpeg"
              alt="Gymnastics facility"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Building Champions Since 2008</h3>
            <p className="text-lg text-gray-600 mb-6">
              Located in beautiful Savannah, GA, our state-of-the-art facility provides a safe and nurturing environment
              where gymnasts of all ages and skill levels can learn, grow, and achieve their dreams.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe that gymnastics is more than just physical activity – it's about building confidence,
              discipline, and lifelong friendships. Our experienced coaches are committed to helping each student reach
              their full potential.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800">Expert Coaches</h4>
                <p className="text-sm text-gray-600">Certified professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800">Proven Results</h4>
                <p className="text-sm text-gray-600">Award-winning programs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional gymnastics instruction that develops physical skills, mental toughness, and
              character in a fun, safe, and supportive environment.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Values</h3>
            <p className="text-gray-600">
              We believe in respect, integrity, teamwork, and perseverance. Every gymnast is valued and encouraged to
              reach their personal best while having fun.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
