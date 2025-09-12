import { Play } from "lucide-react";

export default function Demo() {
  return (
    <div className="py-16 bg-[#202947]">
      <div className="w-full px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wider">
            DEMO
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 sm:w-16 md:w-16 h-0.5 bg-white/30"></div>
            <div className="w-1.5 sm:w-2 md:w-2 h-1.5 sm:h-2 md:h-2 bg-white rounded-full mx-3 sm:mx-4"></div>
            <div className="w-12 sm:w-16 md:w-16 h-0.5 bg-white/30"></div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 leading-relaxed mb-8">
            Watch PG Sphere software demo videos on our YouTube channel. We made sure to cover all the portions of the software usage from registration to deleting account. You can always reach out to our support if you need more info.
          </p>
          
          {/* View Demo Button */}
          <button className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white bg-white text-[#202947] font-semibold rounded-lg hover:bg-transparent hover:text-white transition-colors duration-300 text-sm sm:text-base">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded flex items-center justify-center">
              <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-white" />
            </div>
            VIEW DEMO
          </button>
        </div>
      </div>
    </div>
  );
}
