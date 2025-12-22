export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/40 shadow-lg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="assets/logo.png"
              alt="EBKC"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <div className="flex flex-col sm:flex-row sm:space-x-2 text-white font-bold text-lg sm:text-xl">
              <span>ETHIOPIAN</span>
              <span>BERHANA</span>
              <span>KIRISTOS CHURCH</span>
            </div>
          </div>

          {/* Navigation Links - Hidden on small screens */}
          <div className="hidden md:flex space-x-4">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Partnership", href: "#Partnership" },
              { name: "Campus", href: "#Campus" },
              { name: "Library", href: "#Library" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
