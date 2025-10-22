import React from 'react';
import Navbar from '../components/Navbar';

const LTGPhase1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm font-medium focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-700 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              LTG at P.S. 85 Phase 1
            </h1>
            <p className="mt-4 text-lg text-green-100 max-w-3xl">
              Interactive Rainforest Experience & Digital Learning
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img
                  src="https://3.files.edl.io/8dfa/22/05/06/115454-4d142aef-f10e-43b7-b63e-2f3a6406b71d.jpg"
                  alt="Interactive Rainforest Experience"
                  className="rounded-xl shadow-lg w-full"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                  Interactive Rainforest Experience
                </h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    We showcased our learning with an Interactive Rainforest Experience where students shared their performances and recordings of their books with QR codes. Our scholars in the Saturday Academy engaged in animal research projects and published their books in Book Creator. Our teachers and students also worked in partnership with Digital Age Learning to show what they learned through movement.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 text-green-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Publishing</h3>
                <p className="text-sm text-gray-600">
                  Students created and published their own books using Book Creator, bringing their research to life.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 text-green-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">QR Code Integration</h3>
                <p className="text-sm text-gray-600">
                  Interactive QR codes allowed visitors to access student performances and recordings.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 text-green-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Movement & Learning</h3>
                <p className="text-sm text-gray-600">
                  Partnership with Digital Age Learning incorporated movement to demonstrate understanding.
                </p>
              </div>
            </div>

            {/* Download Resource */}
            <div className="mt-16 rounded-xl bg-blue-50 border border-blue-100 p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Curriculum Resources
                  </h3>
                  <p className="text-gray-600">
                    Download our Digital Age LTG Curriculum Map to learn more about this program.
                  </p>
                </div>
                <a
                  href="https://4.files.edl.io/58ea/05/05/22/112323-53091eeb-ec89-4497-b97f-403df1ea5b13.docx"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors whitespace-nowrap"
                  download
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Curriculum Map
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Explore More LTG Phases
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our Learning Technology Grant continues to evolve across different phases.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/ltg-phase-2"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
              >
                View Phase 2
              </a>
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

export default LTGPhase1;
