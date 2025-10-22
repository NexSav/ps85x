import React from 'react';
import Navbar from '../components/Navbar';

// ==================== INLINE SVG ICONS ====================
// All icons are outline-based, stroke-width 1.5-2, 20-24px

const CalendarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const UserGroupIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const BookOpenIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const AcademicCapIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const HeartIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const SparklesIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const HandRaisedIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// ==================== REUSABLE COMPONENTS ====================

const ValueCard = ({ icon, title, children }) => (
  <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </span>
      <div>
        <h3 className="text-base font-semibold text-gray-900 tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{children}</p>
      </div>
    </div>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-center shadow-sm">
    <div className="text-3xl font-semibold text-white tracking-tight">{number}</div>
    <div className="mt-1 text-sm font-medium text-blue-100">{label}</div>
  </div>
);

const NewsCard = ({ image, title, excerpt, href }) => (
  <article className="group rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    {image && (
      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
        <a href={href} className="focus-visible:outline-none focus-visible:underline">
          {title}
        </a>
      </h3>
      {excerpt && <p className="mt-2 text-sm text-gray-600 line-clamp-2">{excerpt}</p>}
      <a
        href={href}
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
      >
        Read more <ChevronRightIcon />
      </a>
    </div>
  </article>
);

const EventItem = ({ date, month, title, time }) => (
  <div className="flex gap-4 items-start border-l-2 border-blue-600 pl-4 py-3">
    <div className="flex flex-col items-center justify-center bg-blue-50 rounded-md px-3 py-2 min-w-[60px]">
      <div className="text-xs font-medium text-blue-600 uppercase">{month}</div>
      <div className="text-2xl font-semibold text-gray-900">{date}</div>
    </div>
    <div className="flex-1">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      {time && <p className="mt-1 text-sm text-gray-600">{time}</p>}
    </div>
  </div>
);

// ==================== MAIN HOMEPAGE COMPONENT ====================

const HomePage = () => {
  // Real data from scraped PS85 content
  const newsArticles = [
    {
      title: "A Message from Our Principal Ms. Medina",
      image: "https://3.files.edl.io/1f67/22/10/06/142420-4ac7fe45-04dc-4664-bf08-d52079eb2362.jpg",
      excerpt: "Welcome to PS 85, where we foster great expectations for every student, every day.",
      href: "https://www.ps85bronx.org/apps/news/article/1507149"
    },
    {
      title: "Cultural Arts Festival - Video",
      excerpt: "Check out this amazing performance by our P.S. 85 Students!",
      href: "https://www.ps85bronx.org/apps/news/article/2029258"
    },
    {
      title: "Chapter One Tutoring Program",
      image: "https://3.files.edl.io/b960/24/06/07/121223-81e65369-f0ba-4b61-bad2-613ea5909178.jpg",
      excerpt: "Non-profit organization providing online tutoring to our first and second grade students through partnerships with Apple, JP Morgan Chase, and Deloitte.",
      href: "https://www.ps85bronx.org/apps/news/article/1935729"
    }
  ];

  const upcomingEvents = [
    { date: "4", month: "Sep", title: "Welcome Back!!!!", time: null },
    { date: "17", month: "Sep", title: "Evening Parent-Teacher Conferences", time: "4:30 PM – 7:30 PM" },
    { date: "23", month: "Sep", title: "Rosh Hashanah - School Closed!", time: null }
  ];

  const quickLinks = [
    { label: "Staff Directory", href: "https://www.ps85bronx.org/apps/staff/", icon: <UserGroupIcon /> },
    { label: "Events", href: "https://www.ps85bronx.org/apps/events/", icon: <CalendarIcon /> },
    { label: "ClassDojo", href: "https://www.classdojo.com/", icon: <BookOpenIcon /> },
    { label: "Shout Outs", href: "https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2744841&type=d&pREC_ID=2297282", icon: <AcademicCapIcon /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
          {/* Background Image (temporary, awaiting video) */}
          <div className="absolute inset-0 z-0" data-temp="true">
            <img
              src="https://3.files.edl.io/6493/24/12/03/123831-bf60628f-02ab-4a64-bc6a-8c9e59ceb2b1.jfif"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              PS 85 The Great Expectations School
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-100 font-light tracking-wide">
              Great Expectations. Every Student. Every Day.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#visit"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-medium text-white shadow-lg hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 transition-colors"
              >
                Schedule a Visit
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-base font-medium text-white hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* ==================== QUICK ACCESS ROW ==================== */}
        <section className="border-b border-gray-100 bg-gray-50 py-8" aria-label="Quick access links">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== WELCOME / ABOUT SECTION ==================== */}
        <section id="about" className="py-16 md:py-24 bg-white" aria-labelledby="about-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img
                  src="https://3.files.edl.io/e0cc/21/09/10/154302-098709af-a2e5-4806-8787-7be5f8778ad3.jpg"
                  alt="PS 85 welcome sign"
                  className="rounded-xl shadow-md w-full"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2">
                <h2 id="about-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                  Welcome to PS 85
                </h2>
                <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At P.S. 85, we take pride in fostering a school environment where students receive a well-rounded
                    and culturally mindful education in a school climate that is safe and welcoming. In our school
                    community, we value student's voice and prioritize student needs by building and nurturing positive
                    relationships as an agency to a prominent education.
                  </p>
                  <p>
                    Our goal is to build a collaborative school culture that values and embraces knowledge and strives
                    for great expectations on a day-to-day basis for every student.
                  </p>
                  <p className="italic text-gray-900 font-medium">
                    "If educators know every student well and design small group learning opportunities, then every
                    student will take greater ownership of their learning and student voice will be evident in all
                    classrooms thus creating independence and confidence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== VALUES & STATISTICS ==================== */}
        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="values-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">
              Our Core Values
            </h2>

            {/* Values */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <ValueCard icon={<HeartIcon />} title="Excellence">
                We maintain high academic standards and celebrate achievement in all forms.
              </ValueCard>
              <ValueCard icon={<SparklesIcon />} title="Innovation">
                We embrace modern teaching methods and technology to enhance learning experiences.
              </ValueCard>
              <ValueCard icon={<HandRaisedIcon />} title="Community">
                We build strong partnerships between students, families, educators, and the Bronx community.
              </ValueCard>
            </div>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6" data-temp="true">
              <StatCard number="450+" label="Students" />
              <StatCard number="95%" label="Attendance Rate" />
              <StatCard number="50+" label="Dedicated Staff" />
            </div>
          </div>
        </section>

        {/* ==================== NEWS & ANNOUNCEMENTS ==================== */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="news-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 id="news-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Latest News
              </h2>
              <a
                href="https://www.ps85bronx.org/apps/news/"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
              >
                Show all
              </a>
            </div>

            {newsArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map((article, index) => (
                  <NewsCard key={index} {...article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 px-6 border border-dashed border-gray-300 rounded-lg">
                <BookOpenIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-600">No news articles at this time.</p>
                <p className="text-sm text-gray-500 mt-1">Check back soon for updates!</p>
              </div>
            )}
          </div>
        </section>

        {/* ==================== UPCOMING EVENTS ==================== */}
        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="events-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 id="events-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Upcoming Events
              </h2>
              <a
                href="https://www.ps85bronx.org/apps/events/"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
              >
                View calendar
              </a>
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="max-w-3xl space-y-4">
                {upcomingEvents.map((event, index) => (
                  <EventItem key={index} {...event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <CalendarIcon className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600">No upcoming events scheduled.</p>
              </div>
            )}
          </div>
        </section>

        {/* ==================== COMMUNITY INVITE BANNER ==================== */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700" aria-label="Join our community">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              You Belong Here
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Join our vibrant school community where every student is valued, supported, and empowered to achieve great expectations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#visit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 shadow-lg hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transition-colors"
              >
                Schedule a Visit
              </a>
              <a
                href="#enrollment"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-base font-medium text-white hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transition-all"
              >
                Learn About Enrollment
              </a>
            </div>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="bg-gray-900 text-gray-300 py-12" aria-label="Site footer">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo & Contact */}
              <div className="md:col-span-2">
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-2xl font-semibold text-white">PS 85</span>
                  <span className="text-sm text-gray-400">The Great Expectations School</span>
                </div>
                <address className="not-italic text-sm space-y-1">
                  <p>2400 Marion Avenue</p>
                  <p>Bronx, NY 10458</p>
                  <p className="mt-2">
                    <a href="tel:+17185845275" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                      (718) 584-5275
                    </a>
                  </p>
                </address>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.ps85bronx.org/apps/staff/" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Staff Directory</a></li>
                  <li><a href="https://www.ps85bronx.org/apps/events/" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Events</a></li>
                  <li><a href="https://www.ps85bronx.org/apps/news/" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">News</a></li>
                  <li><a href="#contact" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Contact Us</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://login.i-ready.com/" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">i-Ready</a></li>
                  <li><a href="https://www.classdojo.com/" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">ClassDojo</a></li>
                  <li><a href="https://teachhub.schools.nyc/" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">TeachHub</a></li>
                  <li><a href="https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2191827&type=d&pREC_ID=2188977" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Technology Resources</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
              <p>&copy; 2025 PS 85 The Great Expectations School. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
