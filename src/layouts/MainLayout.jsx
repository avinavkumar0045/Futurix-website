// src/layouts/MainLayout.jsx - FULL UPDATED VERSION
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function MainLayout({ children }) {
  const location = useLocation()
  
  // Cosmic page transition variants
  const pageVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.95,
      x: 50,
      filter: "blur(10px)"
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 1.05,
      x: -50,
      filter: "blur(10px)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a002b] text-slate-100 antialiased scroll-smooth relative overflow-hidden">
      
      {/* High-Density Animated Stars Background */}
      <div className="fixed inset-0 z-0">
        {/* Layer 1: Dense Static Stars */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImMiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmYwMDtzdG9wLW9wYWNpdHk6MC4wNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmZmMDBzdG9wLW9wYWNpdHk6MC4wMyIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDAwMDAwIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMSIgZmlsbD0idXJsKCNjKSIvPjxjaXJjbGUgY3g9IjU1IiBjeT0iMjUiIHI9IjAuOCIgZmlsbD0idXJsKCNjKSIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iNDUiIHI9IjEuMiIgZmlsbD0idXJsKCNjKSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iNzUiIHI9IjAuNSIgZmlsbD0idXJsKCNjKSIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iOTAiIHI9IjEiIGZpbGw9InVybCgjYykiLz48L3N2Zz4=')] bg-repeat opacity-40" />
        
        {/* Layer 2: 80 High-Density Rotating Stars */}
        {Array.from({length: 80}).map((_, i) => {
          const size = (i % 3 === 0) ? 'w-[1px] h-[1px]' : 'w-[2px] h-[2px] md:w-[3px] md:h-[3px]'
          const glow = (i % 5 === 0) ? 'from-purple-400/80 to-fuchsia-400/80 shadow-[0_0_8px_rgba(168,85,247,0.6)]' : 'from-purple-400/50 to-fuchsia-400/40'
          
          return (
            <motion.div
              key={`star-${i}`}
              className={`absolute ${size} bg-gradient-to-r ${glow} rounded-full`}
              style={{
                left: `${(i * 4.5) % 100}%`,
                top: `${(i * 3.2) % 100}%`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 0.95, 1.05, 1],
                opacity: [0.4, 0.8, 0.3, 0.7, 0.4]
              }}
              transition={{
                rotate: { duration: 20 + i * 0.05, repeat: Infinity, ease: "linear" },
                scale: { duration: 4 + i * 0.03, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 3 + i * 0.02, repeat: Infinity, ease: "easeInOut" },
                delay: i * 0.02
              }}
            />
          )
        })}
        
        {/* Layer 3: Fast Shooting Stars */}
        {Array.from({length: 5}).map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-px h-px bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)]"
            style={{
              right: `${5 + i * 20}%`,
              top: `${10 + i * 18}%`,
            }}
            animate={{
              x: [-120, 120],
              opacity: [0, 1, 0],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 4 + i * 1.5,
              ease: "linear"
            }}
          >
            <div className="absolute -left-12 top-1/2 w-[50px] h-[1.5px] bg-white rotate-[-35deg] origin-right opacity-80 shadow-sm" />
          </motion.div>
        ))}
        
        {/* Layer 4: Slow Rotating Nebula */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.2),transparent_50%)]"
          animate={{ 
            rotate: 360,
            scale: [1, 1.12, 1]
          }}
          transition={{ 
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Subtle Purple Pulse Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-900/15 via-transparent to-fuchsia-900/20"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content Layer with Page Transitions */}
      <div className="relative z-20">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-8rem)]"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        
        <footer className="py-6 text-center text-sm text-slate-500 border-t border-white/10 bg-black/70 backdrop-blur-sm">
          © <span>{new Date().getFullYear()}</span> Futurix • All rights reserved.
        </footer>
      </div>
    </div>
  )
}
