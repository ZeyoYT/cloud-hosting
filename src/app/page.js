import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
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
        <section id="plans" className="text-center sm:text-left">
          <h2 className="text-2xl font-bold">Our Hosting Plans</h2>
          <p className="text-sm mt-2">Choose a plan that fits your needs.</p>
          {/* Plans would be dynamically loaded here */}
          <div className="mt-4 flex gap-4 flex-col sm:flex-row">
            {/* Placeholder for hosting plan */}
            <div className="border rounded-lg p-4 w-60 shadow-lg">
              <h3 className="font-semibold">Basic Plan</h3>
              <p>$10/month</p>
              <p>1 Site, 10 GB Storage</p>
            </div>
            <div className="border rounded-lg p-4 w-60 shadow-lg">
              <h3 className="font-semibold">Pro Plan</h3>
              <p>$20/month</p>
              <p>10 Sites, 100 GB Storage</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="text-center sm:text-left mt-8">
          <h2 className="text-2xl font-bold">Features</h2>
          <p className="text-sm mt-2">Get the best features with our hosting plans.</p>
          <ul className="list-disc list-inside mt-4">
            <li>99.9% Uptime</li>
            <li>24/7 Support</li>
            <li>Free SSL Certificate</li>
          </ul>
        </section>

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

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms"
          target="_self"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Terms of Service
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy"
          target="_self"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/shield.svg"
            alt="Shield icon"
            width={16}
            height={16}
          />
          Privacy Policy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://cloudhosting.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visit cloudhosting.com →
        </a>
      </footer>
    </div>
  );
}
