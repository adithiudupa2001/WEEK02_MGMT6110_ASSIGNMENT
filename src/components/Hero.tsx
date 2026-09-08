import React from 'react';
import { ArrowDown, Heart } from 'lucide-react';
import { HERO_IMAGE_URL } from '../data/pets';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c4e9cb] text-[#496a52] w-fit border border-[#45664e]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#45664e] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide">
                Singapore Stray Animal Rescue &amp; Rehabilitation
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#191c1a] leading-[1.15] tracking-tight">
              Every street soul deserves a safe hearth in the heartlands
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#57423b] max-w-2xl leading-relaxed">
              Creating a compassionate Singapore where no stray is left behind, pairing street animals with loving lifelong homes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#adopt"
                className="px-6 py-3.5 rounded-full bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold text-sm flex items-center gap-2 transition-all duration-150 shadow-sm active:scale-95"
              >
                <span>Meet Our Street Angels</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#support-us"
                className="px-6 py-3.5 rounded-full bg-[#ecefea] hover:bg-[#e0e3df] text-[#191c1a] border border-[#dec0b7] font-semibold text-sm transition-all duration-150 active:scale-95"
              >
                Contribute to Rescue Care
              </a>
            </div>

            {/* Heartlands Stats Micro-Bento */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#dec0b7]/50 max-w-lg">
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-[#9f3c16]">340+</span>
                <span className="text-xs sm:text-sm text-[#57423b] font-medium">Rehomed to HDBs</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-[#45664e]">1,200+</span>
                <span className="text-xs sm:text-sm text-[#57423b] font-medium">TNVR Sterilised</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-[#874e00]">100%</span>
                <span className="text-xs sm:text-sm text-[#57423b] font-medium">Compassion Led</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden elevation-mid border border-[#dec0b7]/60 bg-white">
              <img
                src={HERO_IMAGE_URL}
                alt="A warm and tender moment in a sunlit Singapore apartment with a rescued Singapore Special dog and a sleepy calico cat"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-500 hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Floating Shelter Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#dec0b7]/40 flex items-center gap-3 shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#ffdbcf] flex items-center justify-center text-[#9f3c16] shrink-0">
                  <Heart className="w-5 h-5 fill-[#9f3c16]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#191c1a]">Sunlit Sungei Tengah Shelter</p>
                  <p className="text-xs text-[#57423b]">Open for pre-arranged adoption visits every Saturday &amp; Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
