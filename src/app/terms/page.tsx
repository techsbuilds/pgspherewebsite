"use client";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import TermofService from "@/component/TermofService";

export default function TermsPage() {
  return (
    <div className="font-sans bg-white text-slate-900 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <TermofService />
      </div>
      <Footer />
    </div>
  );
}


