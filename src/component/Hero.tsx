export default function Hero() {
  return (
    <div className="md:  bg-[#202947] flex items-center justify-center px-3 sm:px-4 lg:px-22 md:pt-0 pt-12">
      {/* Main Content - full width aligned to navbar padding */}
      <div className="w-full md:py-16 pt-12 pb-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center">
          {/* Left Column - 70% for text content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-white md:leading-16 leading-11">
              The Smarter Way to Manage Your {" "}
                <span className="text-blue-500 px-2 py-1 rounded-md">Paying Guest</span>
              </h1>
              <p className="text-xl sm:text-xl md:text-xl lg:text-2xl text-gray-200 lg:leading-relaxed leading-7">
              All-in-one platform to organize, track, and scale your PG operations.
              </p>
              <p className="text-lg sm:text-base md:text-lg lg:text-xl text-gray-200 font-semibold">
                Save time. Work less. Earn more.
              </p>
            </div>
          </div>

          {/* Right Column - 30% for home image */}
          <div className="w-full pt-6 lg:pt-20 rounded-2xl overflow-hidden order-1 lg:order-2 lg:w-132 lg:h-140">
            <img 
            height={600}
            width={410}
              src="/home.jpg" 
              alt="Property management interface" 
              className="w-full max-w-sm mx-auto rounded-xl lg:w-132 lg:h-140"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
