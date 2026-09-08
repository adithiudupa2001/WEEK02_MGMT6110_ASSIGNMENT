import React from 'react';
import { Utensils, Syringe, Home, Quote } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="our-story" className="py-16 md:py-24 bg-[#f7faf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#9f3c16] text-xs font-bold uppercase tracking-wider">
            Community Roots
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191c1a] mt-2 tracking-tight">
            Born from the quiet dedication of Singapore street feeders
          </h2>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-[#dec0b7]/60 elevation-low hover:elevation-mid transition-all duration-200">
            <div className="w-12 h-12 rounded-2xl bg-[#ffdbcf] flex items-center justify-center text-[#9f3c16] mb-5">
              <Utensils className="w-6 h-6 text-[#9f3c16]" />
            </div>
            <h3 className="text-xl font-bold text-[#191c1a] mb-2">Daily Street Feeding</h3>
            <p className="text-sm sm:text-base text-[#57423b] leading-relaxed">
              Every night across Lim Chu Kang, Tuas, and heartland industrial belts, our feeder network ensures stray packs receive clean water, nutritious meals, and daily health checks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-[#dec0b7]/60 elevation-low hover:elevation-mid transition-all duration-200">
            <div className="w-12 h-12 rounded-2xl bg-[#c4e9cb] flex items-center justify-center text-[#45664e] mb-5">
              <Syringe className="w-6 h-6 text-[#45664e]" />
            </div>
            <h3 className="text-xl font-bold text-[#191c1a] mb-2">Vaccination &amp; TNVR</h3>
            <p className="text-sm sm:text-base text-[#57423b] leading-relaxed">
              Ethical Trap-Neuter-Return-Manage drives humanely stabilize Singapore's stray population. Every animal is sterilized, vaccinated against rabies and distemper, and microchipped.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-[#dec0b7]/60 elevation-low hover:elevation-mid transition-all duration-200">
            <div className="w-12 h-12 rounded-2xl bg-[#ffdcbe] flex items-center justify-center text-[#874e00] mb-5">
              <Home className="w-6 h-6 text-[#874e00]" />
            </div>
            <h3 className="text-xl font-bold text-[#191c1a] mb-2">Community Sheltering</h3>
            <p className="text-sm sm:text-base text-[#57423b] leading-relaxed">
              Our Sungei Tengah facility offers calm indoor-outdoor enclosures where traumatized animals unlearn fear, socialise with companions, and learn leash manners for life in HDB flats.
            </p>
          </div>
        </div>

        {/* Vision Statement Highlight */}
        <div className="bg-[#ecefea] rounded-3xl p-8 md:p-12 text-center border border-[#dec0b7]/70 relative overflow-hidden">
          <Quote className="w-16 h-16 text-[#dec0b7]/40 absolute top-4 left-6 pointer-events-none" />
          <p className="text-xs font-bold text-[#9f3c16] uppercase tracking-widest mb-3">
            Our Continuing Vision
          </p>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-[#191c1a] max-w-4xl mx-auto italic leading-relaxed">
            &ldquo;Creating a compassionate Singapore where no stray is left behind, pairing street animals with loving lifelong homes.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};
