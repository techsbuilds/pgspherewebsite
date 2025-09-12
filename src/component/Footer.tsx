import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#202947] py-12">
      <div className="w-full px-3 sm:px-4 lg:px-22">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="space-y-5 sm:col-span-2 md:col-span-1">
            <div>
              <div className="flex items-center gap-3">
                <img src="/favicon.ico" alt="PGSphere Logo" className="h-10 w-10 rounded-xl" />
                <h3 className="text-2xl font-bold text-white">PG Sphere</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mt-3">
                Transform your business with our powerful SaaS solution. Streamline operations,
                boost productivity, and drive growth.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a aria-label="Facebook" href="#" className="text-gray-300 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a aria-label="Twitter" href="#" className="text-gray-300 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a aria-label="Instagram" href="#" className="text-gray-300 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a aria-label="LinkedIn" href="#" className="text-gray-300 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          


            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">contact</a></li>

              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Legal</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>

          

          {/* Contact */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1 pl-0 md:pl-25">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-300"><Mail className="w-4 h-4" /> contact@pgsphere.com</div>
              <div className="flex items-center gap-3 text-gray-300"><Phone className="w-4 h-4" /> +91 7874510328</div>
              <div className="flex items-start gap-3 text-gray-300"><MapPin className="w-4 h-4 mt-1" />
                <div>
                  Navratna Corporate Park, 521
                  <div>Ambli Rd, Ashok Vatika</div>
                  <div>Bopal, Ahmedabad, Gujarat 380058</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <p className="text-gray-300 text-sm text-center">© 2025 PG Sphere. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
