export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="w-[70%] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-800">ABOUT</span>{" "}
            <span className="text-[#202947]">US</span>
          </h2>
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gray-300"></div>
            <div className="w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-[#202947] rounded-full mx-3 sm:mx-4"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gray-300"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#202947] mb-4">
                Who We Are
              </h3>
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                <p>
                  PG Sphere is a comprehensive Branch management solution designed specifically for Paying Guest (PG) accommodations and hostels. We understand the unique challenges faced by property managers in this sector and have created a platform that simplifies operations while maximizing efficiency.
                </p>
                <p>
                  Our mission is to revolutionize the way PG accommodations are managed by providing intuitive, user-friendly tools that work seamlessly across web and mobile platforms. We believe in empowering property managers with technology that saves time, reduces errors, and increases profitability.
                </p>
                <p>
                  With years of experience in the hospitality and property management industry, our team has developed a solution that addresses the real-world needs of PG operators, from tenant management to financial tracking and maintenance scheduling.
                </p>
              </div>
            </div>

            {/* Right Column - Features/Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-[#202947] mb-2">50+</div>
                  <div className="text-sm sm:text-base text-gray-600">Branch Managed</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-[#202947] mb-2">10+</div>
                  <div className="text-sm sm:text-base text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-[#202947] mb-2">24/7</div>
                  <div className="text-sm sm:text-base text-gray-600">Support Available</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-[#202947] mb-2">99%</div>
                  <div className="text-sm sm:text-base text-gray-600">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#202947] text-center mb-8">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#202947] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">I</span>
                </div>
                <h4 className="text-lg font-semibold text-[#202947] mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Continuously improving our platform with cutting-edge technology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#202947] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">R</span>
                </div>
                <h4 className="text-lg font-semibold text-[#202947] mb-2">Reliability</h4>
                <p className="text-sm text-gray-600">Providing consistent, dependable service to our customers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#202947] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">E</span>
                </div>
                <h4 className="text-lg font-semibold text-[#202947] mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">Striving for the highest quality in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
