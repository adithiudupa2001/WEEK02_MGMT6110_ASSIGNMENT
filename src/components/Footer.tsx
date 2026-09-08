import React from 'react';
import { PawPrint } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
  onPrivacyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick, onPrivacyClick }) => {
  return (
    <footer id="contact" className="bg-[#ecefea] border-t border-[#e0e3df] mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-10 gap-6">
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <a href="#" className="flex items-center justify-center md:justify-start gap-2 group">
            <span className="w-7 h-7 rounded-full bg-[#9f3c16] flex items-center justify-center text-white">
              <PawPrint className="w-3.5 h-3.5 fill-white" />
            </span>
            <span className="text-xl font-bold text-[#9f3c16] tracking-tight">
              Paws &amp; Home SG
            </span>
          </a>
          <p className="text-xs sm:text-sm text-[#57423b] max-w-xl">
            Sungei Tengah Animal Care Sanctuary, 50 Sungei Tengah Road, Lim Chu Kang, Singapore 699012.
          </p>
          <p className="text-xs sm:text-sm text-[#57423b]">
            Inquiries:{' '}
            <a
              href="mailto:contact@pawsandhome.org.sg"
              className="text-[#191c1a] font-semibold hover:underline"
            >
              contact@pawsandhome.org.sg
            </a>
          </p>
          <p className="text-xs text-[#57423b] pt-2">
            &copy; 2024 Paws &amp; Home SG Charity Registration UEN: T20SS0192K. Lim Chu Kang / Sungei Tengah Shelter, Singapore.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
          <a
            href="#adopt"
            className="text-[#9f3c16] font-semibold hover:underline transition-all"
          >
            Adopt
          </a>
          <a
            href="#our-story"
            className="text-[#57423b] hover:text-[#9f3c16] hover:underline transition-all"
          >
            Our Story
          </a>
          <a
            href="#support-us"
            className="text-[#57423b] hover:text-[#9f3c16] hover:underline transition-all"
          >
            Support Us
          </a>
          <button
            onClick={onContactClick}
            className="text-[#57423b] hover:text-[#9f3c16] hover:underline transition-all cursor-pointer"
          >
            Contact Shelter
          </button>
          <button
            onClick={onPrivacyClick}
            className="text-[#57423b] hover:text-[#9f3c16] hover:underline transition-all cursor-pointer"
          >
            Privacy Policy
          </button>
        </nav>
      </div>
    </footer>
  );
};
