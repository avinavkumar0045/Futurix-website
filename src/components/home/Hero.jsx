import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer"; // npm i react-intersection-observer

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* 1. ULTRON 9.0 Hero - Massive Impact */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-30 max-w-4xl space-y-8"
        >
          <motion.h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[11rem] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-fuchsia-400 leading-none drop-shadow-2xl">
            ULTRON
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-9xl text-purple-300 font-light">9.0</span>
          </motion.h1>
          <motion.p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium max-w-3xl mx-auto leading-relaxed">
            The Flagship Tech Fest , Redefining Innovation
          </motion.p>
          <motion.div className="text-2xl md:text-3xl font-mono text-purple-300 tracking-wider">
            <div>17th - 20th March 2026</div>
          </motion.div>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center"> 
            <Link to="/register" className="px-12 py-6 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-xl shadow-2xl hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] uppercase tracking-wide animate-pulse">
              REGISTER NOW
            </Link>
            <Link to="/events" className="px-12 py-6 rounded-xl border-2 border-purple-400/50 bg-black/40 backdrop-blur text-purple-200 hover:bg-purple-500/30 font-bold text-xl uppercase tracking-wide">
              Explore Events
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Event Timeline */}
      <section className="py-24 px-6 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
          >
            ULTRON 9.0 Timeline
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-fuchsia-400 opacity-50" />
            <div className="space-y-12">
              {[
                { date: "Jan-Feb 2026", title: "Registrations Open", desc: "Open registration for all events. Early bird discounts available.", color: "from-purple-500" },
                { date: "15th March", title: "Orientation Day", desc: "Official inauguration + workshop sessions kickoff.", color: "from-blue-500" },
                { date: "17-19 March", title: "Main Events", desc: "Competitions, workshops, hackathons, exhibitions.", color: "from-emerald-500" },
                { date: "20th March", title: "Grand Finale", desc: "Prize distribution + valedictory ceremony.", color: "from-orange-500" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`flex ${i % 2 ? 'flex-row-reverse' : ''} items-center`}
                >
                  <div className={`w-1/2 p-8 rounded-2xl bg-gradient-to-r ${item.color} to-purple-600 shadow-2xl shadow-purple-500/25`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.desc}</p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                      {item.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Past Glory - Testimonies & Achievements */}
      <section className="py-24 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"
        >
          FUTURIX Legacy
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { img: "https://i.postimg.cc/k4ZyCxBS/Ultron8.jpg", title: "ULTRON 8.0", stat: "5000+ Participants", year: "2025" },
            { img: "https://i.postimg.cc/qv5qjQY2/lens.jpg", title: "Lens Lumina", stat: "200+ Entries", year: "2025" },
            { img: "https://i.postimg.cc/QFNfHsmb/Tech-mesh-2024.avif", title: "Tech Mesh 2024", stat: "₹5L+ Prizes", year: "2024" }
          ].map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img src={event.img} alt={event.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-purple-400 text-xl font-black">{event.stat}</p>
                <p className="text-white/70">{event.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Highlights Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a002b]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl font-black mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-fuchsia-400"
          >
            Why ULTRON 9.0?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "50+", title: "Events", desc: "Competitions & Workshops" },
              { num: "₹10L+", title: "Prize Pool", desc: "Cash Rewards" },
              { num: "100+", title: "Speakers", desc: "Industry Experts" },
              { num: "10K+", title: "Participants", desc: "Expected Footfall" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-8 rounded-2xl bg-black/50 border border-white/10 backdrop-blur hover:bg-purple-500/10 transition-all"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {item.num}
                </div>
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
            Ready to Dominate ULTRON 9.0?
          </h2>
          <Link to="/register" className="inline-block px-12 py-6 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-2xl shadow-2xl hover:shadow-[0_0_80px_rgba(168,85,247,1)] uppercase tracking-wider animate-bounce">
            Secure Your Spot Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
