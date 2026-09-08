import React, { useState } from 'react';
import { MapPin, ShieldCheck, Search, Filter } from 'lucide-react';
import { Pet } from '../types';
import { PETS_DATA } from '../data/pets';

interface AdoptSectionProps {
  onScheduleClick: (petName: string) => void;
  onAdoptClick: (pet: Pet) => void;
}

export const AdoptSection: React.FC<AdoptSectionProps> = ({ onScheduleClick, onAdoptClick }) => {
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPets = PETS_DATA.filter((pet) => {
    const matchesFilter = filter === 'all' || pet.type === filter;
    const matchesSearch =
      pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="adopt" className="py-16 md:py-24 bg-[#f1f4f0] border-y border-[#dec0b7]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & 'How it works' Notice */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[#9f3c16] text-xs uppercase tracking-wider mb-2 font-bold">
              <MapPin className="w-3.5 h-3.5" />
              Heartland Companions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191c1a] tracking-tight">
              Adopt a friend &amp; transform a life
            </h2>
            <p className="text-base text-[#57423b] mt-2 leading-relaxed">
              Every rescue here is microchipped, fully assessed for temperament, and ready to become a cherished family member.
            </p>
          </div>

          {/* How It Works Reassuring Note Banner */}
          <div className="bg-white p-5 rounded-2xl border border-[#dec0b7]/80 elevation-low max-w-xl">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#c4e9cb] text-[#496a52] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-[#45664e]" />
              </div>
              <div className="text-sm text-[#57423b] space-y-1">
                <p className="font-bold text-[#191c1a]">How it works: Guided &amp; Thoughtful</p>
                <p className="leading-relaxed">
                  A scheduled visit happens at our{' '}
                  <span className="font-semibold text-[#191c1a]">Sungei Tengah shelter</span> in Lim Chu Kang. Once your adoption is finalized, your companion is gently{' '}
                  <span className="font-semibold text-[#9f3c16]">hand-delivered to your home</span> with starter food, calming pheromones, and initial settling-in supplies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills & Quick Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#9f3c16] text-white shadow-xs'
                  : 'bg-white text-[#57423b] border border-[#dec0b7]/60 hover:bg-[#ecefea]'
              }`}
            >
              All Rescues ({PETS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('dog')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === 'dog'
                  ? 'bg-[#9f3c16] text-white shadow-xs'
                  : 'bg-white text-[#57423b] border border-[#dec0b7]/60 hover:bg-[#ecefea]'
              }`}
            >
              Singapore Specials ({PETS_DATA.filter((p) => p.type === 'dog').length})
            </button>
            <button
              onClick={() => setFilter('cat')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === 'cat'
                  ? 'bg-[#9f3c16] text-white shadow-xs'
                  : 'bg-white text-[#57423b] border border-[#dec0b7]/60 hover:bg-[#ecefea]'
              }`}
            >
              Community Cats &amp; Kittens ({PETS_DATA.filter((p) => p.type === 'cat').length})
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a726a]" />
            <input
              type="text"
              placeholder="Search by name, area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-full bg-white border border-[#dec0b7]/80 text-[#191c1a] placeholder:text-[#8a726a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
            />
          </div>
        </div>

        {/* 3-Column Pet Grid (8 Pets) */}
        {filteredPets.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#dec0b7]/60">
            <Filter className="w-10 h-10 mx-auto text-[#8a726a] mb-3" />
            <h3 className="text-lg font-bold text-[#191c1a]">No rescues found matching your criteria</h3>
            <p className="text-sm text-[#57423b] mt-1">Try resetting the filter or searching with a different term.</p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#9f3c16] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((pet) => (
              <article
                key={pet.id}
                className="bg-white rounded-3xl p-4 border border-[#dec0b7]/60 elevation-low flex flex-col justify-between hover:elevation-mid hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#ecefea] mb-4 group">
                    <img
                      src={pet.image}
                      alt={pet.altText}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#191c1a] shadow-xs">
                      {pet.age} • {pet.breed}
                    </div>
                  </div>

                  <div className="px-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#191c1a]">{pet.name}</h3>
                      <div className="flex items-center gap-1.5">
                        {pet.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#c4e9cb] text-[#496a52] text-[11px] font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#45664e]"></span>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#57423b] min-h-[60px] leading-relaxed">
                      {pet.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-4 mt-2 border-t border-[#ecefea]">
                  <button
                    onClick={() => onScheduleClick(pet.name)}
                    type="button"
                    className="w-full py-2.5 px-3 rounded-full bg-[#ecefea] hover:bg-[#e0e3df] text-[#191c1a] font-semibold text-xs transition-all text-center active:scale-95"
                  >
                    Schedule a visit
                  </button>
                  <button
                    onClick={() => onAdoptClick(pet)}
                    type="button"
                    className="w-full py-2.5 px-3 rounded-full bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold text-xs transition-all text-center active:scale-95 shadow-xs"
                  >
                    Adopt me
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
