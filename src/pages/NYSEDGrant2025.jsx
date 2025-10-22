import React from 'react';
import Navbar from '../components/Navbar';

const NYSEDGrant2025 = () => {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              NYSED CSD 10 Learning Technology Grant 2025
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl">
              Empowering learning through innovative technology initiatives
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-8 mb-8">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
                  About the Grant
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  PS 85 is proud to participate in the NYSED Community School District 10 Learning Technology Grant for 2025.
                  This grant enables us to integrate cutting-edge technology into our curriculum, providing students with
                  modern tools and resources to enhance their educational experience.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
                  Program Phases
                </h2>
                <div className="space-y-4">
                  <a
                    href="/ltg-phase-1"
                    className="block rounded-lg border border-gray-200 p-6 hover:border-blue-600 hover:shadow-md transition-all group"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Phase 1: Interactive Rainforest Experience
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Students showcase learning through interactive experiences with QR codes and digital publications.
                    </p>
                  </a>

                  <a
                    href="/ltg-phase-2"
                    className="block rounded-lg border border-gray-200 p-6 hover:border-blue-600 hover:shadow-md transition-all group"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Phase 2: PS 85 News & Videos
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Participating classes create news content and video productions showcasing student work.
                    </p>
                  </a>

                  <a
                    href="/ltg-phase-3"
                    className="block rounded-lg border border-gray-200 p-6 hover:border-blue-600 hover:shadow-md transition-all group"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Phase 3: Podcasts & Digital Media
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Students explore podcasting, video production, and digital storytelling.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Learn More About Our Programs
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore how our Learning Technology Grant initiatives are transforming education at PS 85.
            </p>
            <div className="mt-8">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 transition-all"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-2xl font-semibold text-white">PS 85</span>
                  <span className="text-sm text-gray-400">The Great Expectations School</span>
                </div>
                <address className="not-italic text-sm space-y-1">
                  <p>2400 Marion Avenue</p>
                  <p>Bronx, NY 10458</p>
                  <p className="mt-2">
                    <a href="tel:+17185845275" className="hover:text-white">
                      (718) 584-5275
                    </a>
                  </p>
                </address>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="hover:text-white">Home</a></li>
                  <li><a href="/about" className="hover:text-white">About Us</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://login.i-ready.com/" className="hover:text-white">i-Ready</a></li>
                  <li><a href="https://www.classdojo.com/" className="hover:text-white">ClassDojo</a></li>
                  <li><a href="https://teachhub.schools.nyc/" className="hover:text-white">TeachHub</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
              <p>&copy; 2025 PS 85 The Great Expectations School. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default NYSEDGrant2025;
