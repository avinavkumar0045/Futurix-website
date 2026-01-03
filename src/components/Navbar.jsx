// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient strip that blends with hero */}
      <div className="pointer-events-none absolute inset-0 h-20 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />

      <nav className="relative h-20 flex items-center border-b border-white/10 backdrop-blur-xl">
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo flush to left */}
          <NavLink to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Futurix"
              className="h-10 sm:h-12 lg:h-14 object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `pb-1 transition-all duration-300 ${
                    isActive
                      ? "text-purple-300 border-b-2 border-purple-400"
                      : "text-slate-300 hover:text-white hover:border-b-2 hover:border-purple-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-slate-200 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-0 right-0 md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
              {links.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-xl transition-all ${
                      isActive
                        ? "text-purple-300 font-semibold bg-purple-500/20"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
