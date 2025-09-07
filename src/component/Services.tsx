import { Smartphone, Monitor, Cloud } from "lucide-react";

export default function Services() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="w-[70%] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-800">OUR</span>{" "}
            <span className="text-[#202947]">SERVICES</span>
          </h2>
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gray-300"></div>
            <div className="w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-[#202947] rounded-full mx-3 sm:mx-4"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gray-300"></div>
          </div>
          <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-600 leading-relaxed px-2">
              We provide a better and efficient way to manage your PGs remotely.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-600 leading-relaxed px-2">
              With both web and android applications, PG Sphere is the best application available for managing your paying guest facility!
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-12">
          {/* Android Application */}
          <div className="text-center group p-4 sm:p-6 md:p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 border-2 border-[#202947] rounded-lg flex items-center justify-center group-hover:bg-[#202947] transition-colors duration-300">
              <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#202947] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Mobile Application
            </h3>
            <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
              Manage your PG with finger tips anywhere, anytime with our android application.
            </p>
          </div>

          {/* Web Application */}
          <div className="text-center group p-4 sm:p-6 md:p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 border-2 border-[#202947] rounded-lg flex items-center justify-center group-hover:bg-[#202947] transition-colors duration-300">
              <Monitor className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#202947] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Web Application
            </h3>
            <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
              Not a smartphone junkie? No worries, manage your PG with your desktop on site with our web application.
            </p>
          </div>

          {/* Cloud Support */}
          <div className="text-center group p-4 sm:p-6 md:p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 border-2 border-[#202947] rounded-lg flex items-center justify-center group-hover:bg-[#202947] transition-colors duration-300">
              <Cloud className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#202947] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Cloud Support
            </h3>
            <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
              Everything you save is on our cloud. So you need not worry about losing your data, ever again!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
