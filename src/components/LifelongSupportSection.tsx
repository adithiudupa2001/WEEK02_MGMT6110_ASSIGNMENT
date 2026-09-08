import React from 'react';
import { Users, MessageCircle, Stethoscope, HeartHandshake } from 'lucide-react';
import { AFTER_ADOPTION_IMAGE_URL } from '../data/pets';

export const LifelongSupportSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f1f4f0] border-y border-[#dec0b7]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c4e9cb] text-[#496a52] text-xs font-semibold">
              <HeartHandshake className="w-4 h-4 text-[#45664e]" />
              Lifelong Support Commitment
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191c1a] tracking-tight">
              You are never alone after adoption
            </h2>

            <p className="text-base sm:text-lg text-[#57423b] leading-relaxed">
              Adopting a Singapore Special or rescue kitten is a beautiful, transformative journey. We ensure you feel supported at every single step with dedicated community resources.
            </p>

            <div className="space-y-4 pt-2">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffdbcf] flex items-center justify-center text-[#9f3c16] shrink-0 mt-1">
                  <Users className="w-5 h-5 text-[#9f3c16]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#191c1a]">Dedicated Volunteer Buddy System</h4>
                  <p className="text-sm text-[#57423b] mt-1 leading-relaxed">
                    You are paired with an experienced Singapore pawrent who conducts check-ins, helps with home meshing tips, and walks beside you during the first three months.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c4e9cb] flex items-center justify-center text-[#45664e] shrink-0 mt-1">
                  <MessageCircle className="w-5 h-5 text-[#45664e]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#191c1a]">24/7 WhatsApp Community Helpline</h4>
                  <p className="text-sm text-[#57423b] mt-1 leading-relaxed">
                    Instant advice for late-night dietary questions, separation anxiety, litter adjustments, and HDB-approved dog etiquette by certified force-free trainers.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffdcbe] flex items-center justify-center text-[#874e00] shrink-0 mt-1">
                  <Stethoscope className="w-5 h-5 text-[#874e00]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#191c1a]">Subsidized Heartland Vet Partners</h4>
                  <p className="text-sm text-[#57423b] mt-1 leading-relaxed">
                    Access our vetted network of compassionate heartland clinics across Bedok, Jurong, Woodlands, and Ang Mo Kio with subsidized preventative healthcare rates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Family Home Visit Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden elevation-mid border border-[#dec0b7]/60 bg-white p-3">
              <img
                src={AFTER_ADOPTION_IMAGE_URL}
                alt="A smiling Singaporean family in a light-filled modern HDB apartment sitting on a clean floor while an adoption volunteer demonstrates gentle brushing on a relaxed Singapore Special dog"
                className="w-full h-[360px] sm:h-[400px] object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
