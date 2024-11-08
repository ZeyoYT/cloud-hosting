import Image from "next/image";
import Navbar from "./components/Navbar";
import Hostingplan from "./components/Hostingplan";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      
      {/* Navbar */}
      <Navbar />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        {/* Logo */}
        <Image
          src="/cloud-logo.svg"
          alt="Cloud Hosting logo"
          width={180}
          height={50}
          priority
        />

        {/* Hosting Plans Section */}
        <Hostingplan />

        {/* Features Section */}
        <Features />

        {/* Call to Action */}
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#plans"
          >
            Explore Plans
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </main>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}
