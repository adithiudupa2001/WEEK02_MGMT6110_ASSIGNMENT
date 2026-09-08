import React, { useState } from 'react';
import { Heart, Sparkles, CheckCircle, ThumbsUp } from 'lucide-react';
import { DONATION_TIERS } from '../data/pets';

export const SupportSection: React.FC = () => {
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [confirmedDonation, setConfirmedDonation] = useState<{
    amount: number;
    impact: string;
  } | null>(null);

  const activeAmount = isCustom
    ? Number(customAmount) || 0
    : DONATION_TIERS[selectedTierIndex].amount;

  const currentImpactDescription = isCustom
    ? Number(customAmount) > 0
      ? `Your compassionate donation of S$${customAmount} directly subsidises medical diagnostics, nutritional wet food, and sanitised kennel bedding for Sungei Tengah shelter rescues.`
      : 'Enter an amount to see its direct tangible impact on our rescues.'
    : DONATION_TIERS[selectedTierIndex].impactDescription;

  const handleSelectTier = (index: number) => {
    setSelectedTierIndex(index);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    setIsCustom(true);
  };

  const handleConfirm = () => {
    if (activeAmount <= 0) return;
    setConfirmedDonation({
      amount: activeAmount,
      impact: currentImpactDescription,
    });
  };

  return (
    <section id="support-us" className="py-16 md:py-24 bg-[#f7faf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#9f3c16] text-xs font-bold uppercase tracking-wider">
            Make a Difference Today
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191c1a] mt-2 tracking-tight">
            Support our rescue mission
          </h2>
          <p className="text-base text-[#57423b] mt-2 leading-relaxed">
            Not ready to adopt? Your monthly or one-off contribution sustains food, medical rehabilitation, and shelter maintenance for over 180 animals currently in our care.
          </p>
        </div>

        {/* Donation Container Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#dec0b7]/70 elevation-mid">
          <div className="text-sm sm:text-base font-bold text-[#191c1a] mb-4">
            Select contribution amount (SGD):
          </div>

          {/* Donation Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {DONATION_TIERS.map((tier, idx) => {
              const isSelected = !isCustom && selectedTierIndex === idx;
              return (
                <button
                  key={tier.amount}
                  type="button"
                  onClick={() => handleSelectTier(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'border-2 border-[#9f3c16] bg-[#ffdbcf]/25 shadow-xs'
                      : 'border border-[#dec0b7] bg-white hover:border-[#9f3c16]/60'
                  }`}
                >
                  <span
                    className={`block text-xl sm:text-2xl font-bold ${
                      isSelected ? 'text-[#9f3c16]' : 'text-[#191c1a]'
                    }`}
                  >
                    ${tier.amount} SGD
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-[#191c1a] mt-1">
                    {tier.title}
                  </span>
                  <span className="block text-xs text-[#57423b] mt-1">
                    {tier.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Custom Amount & Trigger */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
            <div className="relative w-full sm:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#57423b] font-semibold text-sm">
                S$
              </div>
              <input
                type="number"
                min="1"
                placeholder="Other amount"
                value={customAmount}
                onChange={handleCustomChange}
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm text-[#191c1a] focus:outline-hidden transition-all ${
                  isCustom && customAmount
                    ? 'border-[#9f3c16] ring-1 ring-[#9f3c16] bg-white'
                    : 'border-[#dec0b7] bg-white focus:border-[#9f3c16]'
                }`}
              />
            </div>
            <button
              onClick={handleConfirm}
              type="button"
              disabled={activeAmount <= 0}
              className="w-full sm:w-1/2 py-3 px-6 rounded-full bg-[#9f3c16] hover:bg-[#bf542c] disabled:opacity-50 text-white font-semibold text-sm transition-all duration-150 active:scale-98 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Confirm Contribution</span>
            </button>
          </div>

          {/* Dynamic Tangible Impact State */}
          <div className="p-4 rounded-2xl bg-[#ecefea] border border-[#dec0b7]/60 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#9f3c16] shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs sm:text-sm font-bold text-[#191c1a]">
                Direct Tangible Impact:
              </span>
              <p className="text-xs sm:text-sm text-[#57423b] mt-0.5 leading-relaxed">
                {currentImpactDescription}
              </p>
            </div>
          </div>

          {/* Thank-You Interactive Feedback State */}
          {confirmedDonation && (
            <div className="mt-6 p-6 rounded-2xl bg-[#c4e9cb] text-[#496a52] border border-[#45664e]/30 text-center animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#45664e] text-white mx-auto flex items-center justify-center mb-3 shadow-xs">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#191c1a]">
                Heartfelt Thanks from Sungei Tengah!
              </h4>
              <p className="text-xs sm:text-sm mt-1 max-w-lg mx-auto text-[#191c1a]/90 leading-relaxed">
                Your kindness of <span className="font-bold text-[#9f3c16]">S${confirmedDonation.amount}</span> ensures our shelter residents continue to heal and flourish in comfort.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 text-[#45664e] text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                Charity tax-deductible receipt logged
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
