import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black/60 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Header - Official theme */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl"
        >
          Contact Us
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Want to collaborate, speak, or join Futurix? Get in touch with us.
        </motion.p>

        {/* Main Contact Button - Exact from your HTML */}
        <motion.a
          href="mailto:contact@futurix.org"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.4 }}
          className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 glow mx-auto"
        >
          contact@futurix.org
        </motion.a>

        {/* Social Links - Exact from your HTML */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-8 text-slate-400 text-lg"
        >
          <a 
            href="https://www.instagram.com/futurix.ctech" 
            className="hover:text-purple-400 transition-all duration-300 hover:scale-110 font-semibold"
            target="_blank" rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/company/futurix-srmist" 
            className="hover:text-purple-400 transition-all duration-300 hover:scale-110 font-semibold"
            target="_blank" rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
          100% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(139, 92, 246, 0.6); }
        }
        .glow { animation: glow 2s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
}
