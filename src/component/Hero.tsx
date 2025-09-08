export default function Hero() {
  return (
    <div className="md:min-h-screen  bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 md:pt-0 pt-12">
      {/* Main Content - 70% width, centered */}
      <div className="w-[70%] max-w-6xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - 70% for text content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 md:leading-15 leading-9">
              The Smarter Way to Manage Your {" "}
                <span className="text-[#202947]">Paying Guest</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              All-in-one platform to organize, track, and scale your PG operations.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#202947] font-semibold">
                Save time. Work less. Earn more.
              </p>
            </div>
          </div>

          {/* Right Column - 30% for home image */}
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-96 rounded-2xl overflow-hidden order-1 lg:order-2">
            <img 
              src="/home.jpg" 
              alt="Property management interface" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
