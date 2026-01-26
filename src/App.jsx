import React from 'react';
import { Construction, Sparkles, Send, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import UnderConstruction from "./assets/under_construction.png";

function App() {

  return (
    <div className="min-h-screen  bg-slate-900 overflow-hidden relative selection:bg-pink-500 selection:text-white">
      {/* Dynamic Background */ }
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-screen px-4 sm:px-6 lg:px-8">

        {/* Glass Card */ }
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center hover:shadow-pink-500/10 transition-shadow duration-500">

          {/* Icon/Image */ }
          <div className="mb-6 relative inline-block group">
            <div className="absolute -inset-1 bg-linear-to-r from-pink-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-full p-4 ring-1 ring-white/10">
              <Construction className="w-12 h-12 text-pink-400 animate-pulse" />
            </div>
          </div>

          <h1 className="font-Poppins text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-pink-300 via-purple-300 to-indigo-400 mb-4 tracking-tight">
            Coming Soon
          </h1>

          <p className="text-slate-300 text-lg md:text-xl mb-8 font-light max-w-lg mx-auto leading-relaxed">
            We are building something extraordinary at <span className="font-semibold text-white">EventzGallery</span>.
            Stay tuned for a revolutionary experience.
          </p>

          {/* Social Links */ }
          <div className="flex justify-center gap-6 mt-8 border-t border-white/5 pt-8">
            { [
              { icon: Instagram, href: "#", label: "Instagram" }
            ].map((social, idx) => (
              <a
                key={ idx }
                href={ social.href }
                className="text-slate-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label={ social.label }
              >
                <social.icon className="w-6 h-6" />
              </a>
            )) }
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
