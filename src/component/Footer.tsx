import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#202947] py-12">
      <div className="w-[70%] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Branding and Policies */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">PG Sphere</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The easiest way to manage your PGs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              
            </div>
          </div>

          {/* Middle Section - Empty (removed app downloads) */}
          <div></div>

          {/* Right Section - Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-sm text-gray-300">techsbuilds@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-sm text-gray-300">India : +91 7874510328</span>
              </div>
              
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white mt-1" />
                <div className="text-sm text-gray-300 leading-relaxed">
                  <div>Navratna Corporate Park , 521</div>
                  <div>Ambli Rd, Ashok Vatika</div>
                  <div> Bopal, Ahmedabad,</div>
                  <div> Gujarat 380058</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
