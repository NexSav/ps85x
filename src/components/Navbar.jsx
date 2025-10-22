import React, { useState, useEffect } from 'react';

// Inline SVG Icons (stroke-based, no emoji)
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Our School',
      submenu: [
        { label: 'About Us', href: '/about' },
        { label: 'NYSED CSD 10 Learning Technology Grant 2025', href: '/nysed-grant-2025' },
        { label: 'LTG at P.S. 85 Phase 1', href: '/ltg-phase-1' },
        { label: 'LTG @ P.S. 85 Phase 2', href: '/ltg-phase-2' },
        { label: 'LTG @ P.S. 85 Phase 3', href: '/ltg-phase-3' },
        { label: "Principal's Message", href: '/principal-message' },
      ]
    },
    {
      label: 'Our Classes',
      submenu: [
        { label: 'Pre-K', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=4298397&type=d' },
        { label: 'Kindergarten', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=4298396&type=d' },
        { label: '1st Grade', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=4298395&type=d' },
        { label: '2nd Grade', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=4298394&type=d' },
        { label: '3rd Grade', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=4298393&type=d' },
        { label: '4th Grade', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=4298392&type=d' },
        { label: '5th Grade', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=4298297&type=d' },
      ]
    },
    {
      label: 'Parent Portal',
      submenu: [
        { label: 'Announcements', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2191828&type=d' },
        { label: 'Family Calendar', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2191827&type=d&pREC_ID=2188976' },
        { label: 'Technology Resources', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2191827&type=d&pREC_ID=2188977' },
      ]
    },
    {
      label: 'Student Services',
      submenu: [
        { label: 'Guidance & Counseling', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2197149&type=d' },
        { label: 'Related Services', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2191828&type=d&pREC_ID=2188979' },
        { label: 'Enrichment', href: 'https://www.ps85bronx.org/apps/departments/index.jsp?show=CLU' },
      ]
    },
    {
      label: 'Contact Us',
      submenu: [
        { label: 'Contact P.S. 85', href: 'https://www.ps85bronx.org/apps/contact/' },
        { label: 'Out of Classroom', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2687524&type=d' },
        { label: 'Paraprofessionals', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2687525&type=d' },
        { label: 'School Secretaries', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2687527&type=d' },
        { label: 'School Aides', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=2687526&type=d' },
        { label: 'Family Worker', href: 'https://www.ps85bronx.org/apps/pages/index.jsp?uREC_ID=4321546&type=d&pREC_ID=2531454' },
      ]
    },
  ];

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`relative mt-4 rounded-2xl transition-all duration-200 ${
            isScrolled
              ? 'bg-white shadow-md'
              : 'bg-white/60 backdrop-blur-md shadow-sm'
          }`}
          aria-label="Primary navigation"
        >

          <div className="flex items-center justify-between px-6 py-2">
            {/* Logo */}
            <a href="#home" className="flex items-center -my-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg">
              <img
                src="/assets/images/logo.png"
                alt="PS 85 The Great Expectations School"
                className="h-20 w-auto md:h-24"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded px-2 py-1"
                        aria-expanded={openSubmenu === index}
                      >
                        {item.label}
                        <ChevronDownIcon />
                      </button>
                      {openSubmenu === index && (
                        <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white shadow-lg border border-gray-100 py-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:bg-blue-50"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded px-2 py-1"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-blue-600 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                        aria-expanded={openSubmenu === index}
                      >
                        {item.label}
                        <ChevronDownIcon />
                      </button>
                      {openSubmenu === index && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-blue-600 py-1 focus-visible:outline-none focus-visible:text-blue-600"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
