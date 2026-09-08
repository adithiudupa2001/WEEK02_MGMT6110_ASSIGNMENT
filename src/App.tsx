import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AdoptSection } from './components/AdoptSection';
import { StorySection } from './components/StorySection';
import { LifelongSupportSection } from './components/LifelongSupportSection';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { Pet, ModalType } from './types';
import { PETS_DATA } from './data/pets';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const handleOpenSchedule = (petName?: string) => {
    if (petName) {
      const found = PETS_DATA.find((p) => p.name.toLowerCase() === petName.toLowerCase());
      setSelectedPet(found || { ...PETS_DATA[0], name: petName });
    } else {
      setSelectedPet(PETS_DATA[0]);
    }
    setActiveModal('schedule');
  };

  const handleOpenAdopt = (pet: Pet) => {
    setSelectedPet(pet);
    setActiveModal('adopt');
  };

  const handleOpenContact = () => {
    setActiveModal('contact');
  };

  const handleOpenPrivacy = () => {
    setActiveModal('privacy');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleSubmitSuccess = () => {
    setActiveModal('confirmation');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7faf5] text-[#191c1a]">
      {/* Top Navigation Bar */}
      <Header
        onScheduleClick={handleOpenSchedule}
        onContactClick={handleOpenContact}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Heartland Companions Adopt Section */}
        <AdoptSection
          onScheduleClick={handleOpenSchedule}
          onAdoptClick={handleOpenAdopt}
        />

        {/* Community Roots & Story Section */}
        <StorySection />

        {/* Lifelong Support Commitment Section */}
        <LifelongSupportSection />

        {/* Support Our Rescue Mission (Donations) */}
        <SupportSection />
      </main>

      {/* Footer */}
      <Footer
        onContactClick={handleOpenContact}
        onPrivacyClick={handleOpenPrivacy}
      />

      {/* Interactive Modal Dialogs */}
      <Modals
        activeModal={activeModal}
        selectedPet={selectedPet}
        onClose={handleCloseModal}
        onSubmitSuccess={handleSubmitSuccess}
      />
    </div>
  );
}
