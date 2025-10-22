import React from 'react';
import Navbar from '../components/Navbar';

const PrincipalMessage = () => {
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
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Principal's Message
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl">
              A warm welcome from our school leadership
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Principal Photo */}
              <div className="lg:col-span-1">
                <div className="sticky top-40">
                  <img
                    src="https://3.files.edl.io/c838/22/10/06/142646-486ebc89-b7d3-4c19-aeea-11e95526b0e3.jpg"
                    alt="Ms. Medina - Principal"
                    className="rounded-xl shadow-lg w-full"
                    loading="lazy"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900">Ms. Medina</h3>
                    <p className="text-lg text-gray-600 mt-1">Principal</p>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <span className="font-semibold">Esteemed Families,</span>
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Welcome to the 2023-2024 school year! We are thrilled to start a new year! I hope you all had an opportunity to rest and enjoy the summer. This year we have prepared to receive all students in the main building. Necessary upgrades were made to welcome our youngest scholars.
                  </p>

                  <div className="rounded-xl bg-blue-50 border border-blue-100 p-8 my-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Important Information
                    </h2>

                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>The first day of school for students is <strong>Thursday September 7, 2023</strong></span>
                      </li>

                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>School hours remain as <strong>8:00 AM to 2:20 PM</strong>. Doors open for breakfast at 7:30 A.M.</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div>
                          <p className="mb-2">Please use the <strong>flagpole entrance on 187th Street</strong> for breakfast for students in grades Pre-K and Kindergarten. (This area is newly designated for them)</p>
                          <p>Students in grades 1-5 will enter through the <strong>main entrance on Marion Ave</strong>. More information will be provided on arrival and dismissal for students.</p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span>We highly recommend students wear their school shirts for the first days of school. We will also be giving out school polo shirts to every student the first week.</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Families, we appreciate you and value that you've entrusted our team to this very important work in education. We look forward to another collaborative school year!
                  </p>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-lg font-semibold text-gray-900">Ms. Medina</p>
                    <p className="text-gray-600">Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="rounded-xl bg-blue-600 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Have Questions?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                We're here to help! Reach out to our school office for any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+17185845275"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call (718) 584-5275
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-base font-medium text-white hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transition-all"
                >
                  Contact Us
                </a>
              </div>
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

export default PrincipalMessage;
