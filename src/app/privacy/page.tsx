"use client";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Privacy from "@/component/Privacy";

export default function PrivacyPage() {
  return (
    <div className="font-sans bg-white text-slate-900 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Privacy />
      </div>
      <Footer />
    </div>
  );
}



