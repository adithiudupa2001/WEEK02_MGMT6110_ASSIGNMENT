import React, { useState } from 'react';
import { PawPrint, HeartHandshake, Calendar, Menu, X } from 'lucide-react';

interface HeaderProps {
  onScheduleClick: (petName?: string) => void;
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScheduleClick, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#f7faf5]/95 backdrop-blur-md border-b border-[#e0e3df] transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-full bg-[#9f3c16] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <PawPrint className="w-4 h-4 fill-white" />
          </span>
          <span className="text-xl font-bold text-[#9f3c16] tracking-tight">
            Paws &amp; Home SG
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#adopt"
            className="border-b-2 border-[#9f3c16] text-[#9f3c16] font-semibold pb-1 text-sm tracking-wide transition-colors"
          >
            Adopt
          </a>
          <a
            href="#our-story"
            className="text-[#57423b] hover:text-[#9f3c16] pb-1 text-sm font-medium tracking-wide transition-colors"
          >
            Our Story
          </a>
          <a
            href="#support-us"
            className="text-[#57423b] hover:text-[#9f3c16] pb-1 text-sm font-medium tracking-wide transition-colors"
          >
            Support Us
          </a>
        </nav>

        {/* Trailing Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onContactClick}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#dec0b7] text-[#9f3c16] hover:bg-[#ecefea] font-semibold text-sm transition-all active:scale-95"
          >
            <HeartHandshake className="w-4 h-4" />
            Contact Shelter
          </button>
          <button
            onClick={() => onScheduleClick()}
            type="button"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold text-sm transition-all active:scale-95 shadow-sm"
          >
            <Calendar className="w-4 h-4 sm:hidden" />
            <span>Schedule a visit</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#57423b] hover:bg-[#ecefea]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f7faf5] border-b border-[#e0e3df] px-6 py-4 space-y-3">
          <a
            href="#adopt"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-[#9f3c16]"
          >
            Adopt
          </a>
          <a
            href="#our-story"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#57423b] hover:text-[#9f3c16]"
          >
            Our Story
          </a>
          <a
            href="#support-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#57423b] hover:text-[#9f3c16]"
          >
            Support Us
          </a>
          <div className="pt-2 border-t border-[#e0e3df]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full text-left py-2 text-sm font-semibold text-[#9f3c16] flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4" />
              Contact Shelter
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
