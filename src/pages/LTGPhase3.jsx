import React from 'react';
import Navbar from '../components/Navbar';

const LTGPhase3 = () => {
  const mediaProjects = [
    {
      title: 'Student Podcasts',
      image: 'https://3.files.edl.io/1e38/23/12/04/123359-096bb412-d91a-43fa-82d9-ff7a39e3bf0d.jpg',
      description: 'Students create and produce their own podcasts on various topics'
    },
    {
      title: 'Class 5-407 Productions',
      subtitle: 'Brought to you by Ms. Abreu and Ms. Moss\' Class',
      image: 'https://3.files.edl.io/7f82/24/05/06/015656-888cc181-8a5b-41fc-8318-d13a5250f4f8.jpg',
      description: 'Fifth grade students showcase their multimedia production skills'
    },
    {
      title: 'News Productions',
      image: 'https://3.files.edl.io/f6b3/24/05/06/152142-31c76d3a-9f9b-44af-ae4e-3ffb830265a6.jpg',
      description: 'Student-created news segments and broadcasts'
    },
    {
      title: 'Video Storytelling',
      image: 'https://3.files.edl.io/4bef/24/05/07/114425-16aaef8e-7b0d-4a52-b97b-3865581a3292.jpg',
      description: 'Creative video projects bringing student stories to life'
    }
  ];

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
        <section className="bg-gradient-to-br from-orange-600 to-orange-700 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              LTG @ P.S. 85 Phase 3
            </h1>
            <p className="mt-4 text-lg text-orange-100 max-w-3xl">
              Podcasts, Digital Media & Creative Storytelling
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                Advanced Digital Media Production
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                In Phase 3, students explore advanced digital media production including podcasting, video creation, and multimedia storytelling. This phase empowers students to become confident content creators and digital communicators.
              </p>
            </div>

            {/* Media Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaProjects.map((project, index) => (
                <article key={index} className="group rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm font-medium text-orange-600 mb-2">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Developed */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
              Skills Students Develop
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-50 text-orange-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Podcasting</h3>
                <p className="text-sm text-gray-600">
                  Audio recording, editing, and narrative storytelling techniques.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-50 text-orange-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Production</h3>
                <p className="text-sm text-gray-600">
                  Filming, editing, and producing professional video content.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-50 text-orange-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
                <p className="text-sm text-gray-600">
                  Public speaking, interviewing, and presentation skills.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-50 text-orange-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Creativity</h3>
                <p className="text-sm text-gray-600">
                  Original content creation and creative problem-solving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Class Highlight */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                  Student Showcase
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our students' podcasts, videos, and digital media projects demonstrate their creativity, technical skills, and commitment to quality storytelling.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-3.5 text-base font-medium text-white shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Projects on School Portal
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Explore All LTG Phases
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              See how our Learning Technology Grant program has evolved through each phase.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/ltg-phase-1"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
              >
                View Phase 1
              </a>
              <a
                href="/nysed-grant-2025"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 transition-all"
              >
                Back to Grant Overview
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

export default LTGPhase3;
