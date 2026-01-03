import { motion } from "framer-motion";

const teamMembers = [
  { name: "Abhi Kharel", role: "President", image: "/team/abhi.jpg" },
  { name: "Debosmita Paul", role: "Vice President", image: "/team/debosmita.jpg" },
  { name: "Raunak Raj", role: "Secretary", image: "/team/raunak.jpg" },
  { name: "Varshini Myadam", role: "Vice Secretary", image: "/team/varshini.jpg" },
  { name: "Aayush Mishra", role: "Treasurer", image: "/team/aayush.jpg" },
  { name: "Iraa Jaykumar", role: "Tech Head", image: "/team/iraa.jpg" },
];

export default function About() {
  return (
    <div className="min-h-screen py-28 px-6 max-w-6xl mx-auto bg-[#0a0a0a]/50 text-slate-100">
      {/* About Header - Official purple-black theme */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
          About Us
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mb-8 rounded-full shadow-lg"></div>
        <div className="text-slate-300 space-y-4 max-w-3xl mx-auto">
          <p className="text-xl leading-relaxed">
            Futurix was founded to bridge classroom learning with real-world applications. We are a community of passionate builders, creators, and innovators.
          </p>
          <p className="text-lg"><strong>Vision:</strong> To empower every student with the skills and mindset to thrive in the future of technology.</p>
          <p className="text-lg"><strong>Mission:</strong> To provide a collaborative and inclusive platform for learning, building, and sharing technological knowledge.</p>
        </div>
      </motion.section>

      {/* Convenor's Message - Exact from your HTML */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mb-24"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
          Convenor's Message
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-2xl">
          <img 
            src="https://i.postimg.cc/tZxDdJYp/Kanisha-ma-am.png" 
            alt="Dr. Kanisha B" 
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-purple-400/50 shadow-xl flex-shrink-0"
          />
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">Dr. Kanisha B</h3>
            <p className="text-purple-400 mb-4 font-semibold">Convenor, Futurix Association</p>
            <blockquote className="text-slate-300 italic text-lg border-l-4 border-purple-400 pl-6 py-4">
              "At Futurix, our goal is to encourage innovation, teamwork, and hands-on learning. We nurture young technologists to become future leaders who solve real-world challenges."
            </blockquote>
          </div>
        </div>
      </motion.section>

      {/* Team Grid - Official styling */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 drop-shadow-2xl">
          Our Team
        </h2>
        <div className="flex justify-center gap-2 mb-16">
          <div className="w-20 h-1 bg-purple-500 rounded-full shadow-md"></div>
          <div className="w-12 h-1 bg-fuchsia-500 rounded-full shadow-md"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-6 lg:p-8 hover:bg-black/70 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/25 hover:-translate-y-3 transition-all duration-500 cursor-pointer"
            >
              <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-transparent group-hover:ring-purple-500/40 transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-fuchsia-400 transition-all">
                {member.name}
              </h3>
              <p className="text-purple-400 font-semibold text-base lg:text-lg">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
