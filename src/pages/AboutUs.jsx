import React from 'react';
import Navbar from '../components/Navbar';

// Inline SVG Icons
const AcademicCapIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const EyeIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LightBulbIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content */}
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
              About Us
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl">
              Empowering the students of today for the possibilities of tomorrow.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              {/* Mission */}
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-50 text-blue-600 mb-6">
                  <AcademicCapIcon />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
                  Mission Statement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Empowering the students of today for the possibilities of tomorrow.
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-50 text-blue-600 mb-6">
                  <EyeIcon />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
                  Vision Statement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At P.S. 85, we take pride in fostering a school environment where students are immersed in a well rounded and culturally enriching education that is safe and welcoming. In our school community, we value student voice and prioritize student needs by building nurturing relationships and experiences that will build a strong foundational core to a promising future. We set great expectations for ourselves to reach great aspirations of our scholars.
                </p>
              </div>

              {/* Instructional Focus */}
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-50 text-blue-600 mb-6">
                  <LightBulbIcon />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
                  Instructional Focus
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If educators consistently maintain great expectations, know every student well and design strategic learning opportunities for student-directed work that engages them in culturally responsive and critical thinking experiences, then every student will thrive in an affirming environment and take greater ownership of their learning while empowering student voice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Join Our Community
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how PS 85 can provide your child with a strong foundation for success.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
              >
                Contact Us
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

export default AboutUs;
