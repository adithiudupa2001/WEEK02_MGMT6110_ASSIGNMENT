import React, { useState } from 'react';
import { X, CheckCircle, PawPrint, Truck, Clock, Calendar, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { Pet, ModalType } from '../types';

interface ModalsProps {
  activeModal: ModalType;
  selectedPet: Pet | null;
  onClose: () => void;
  onSubmitSuccess: (title: string, message: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  activeModal,
  selectedPet,
  onClose,
  onSubmitSuccess,
}) => {
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleEmail, setScheduleEmail] = useState('');
  const [schedulePhone, setSchedulePhone] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleNotes, setScheduleNotes] = useState('');

  const [adoptName, setAdoptName] = useState('');
  const [adoptEmail, setAdoptEmail] = useState('');
  const [adoptPhone, setAdoptPhone] = useState('');
  const [adoptHousing, setAdoptHousing] = useState('HDB Flat (Meshed windows & gate)');
  const [adoptMessage, setAdoptMessage] = useState('');

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactTopic, setContactTopic] = useState('General Shelter Inquiry');
  const [contactMessage, setContactMessage] = useState('');

  if (!activeModal) return null;

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitSuccess(
      "Thank you! We've received your visit request",
      `Our shelter adoption volunteers have scheduled your visit for ${selectedPet ? selectedPet.name : 'our rescues'} and will reach out via WhatsApp/call within 24 hours.`
    );
  };

  const handleAdoptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitSuccess(
      "Thank you! We've received your adoption application",
      `Your adoption inquiry for ${selectedPet ? selectedPet.name : 'a rescue'} is logged. Our adoption coordinators will review your home profile and reach out within 24 hours.`
    );
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitSuccess(
      "Message Sent to Sungei Tengah Shelter",
      "Thank you for contacting us! A shelter volunteer or team member will get back to your inquiry promptly."
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D312E]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 elevation-high border border-[#dec0b7] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#57423b] hover:text-[#191c1a] p-1.5 rounded-full hover:bg-[#ecefea] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. SCHEDULE VISIT MODAL */}
        {activeModal === 'schedule' && (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdbcf] text-[#9f3c16] text-xs font-semibold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                Meeting: <span>{selectedPet ? selectedPet.name : 'Shelter Rescues'}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#191c1a]">
                Schedule a Shelter Visit
              </h3>
              <p className="text-xs sm:text-sm text-[#57423b] mt-1 leading-relaxed">
                Visits are held at Sungei Tengah Shelter by appointment to ensure a calm, low-stress environment for our animals.
              </p>
            </div>

            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a726a]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Tan"
                    value={scheduleName}
                    onChange={(e) => setScheduleName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a726a]" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.sg"
                      value={scheduleEmail}
                      onChange={(e) => setScheduleEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                    Singapore Mobile (+65)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a726a]" />
                    <input
                      type="tel"
                      pattern="[89][0-9]{7}"
                      required
                      placeholder="9123 4567"
                      value={schedulePhone}
                      onChange={(e) => setSchedulePhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Preferred Weekend Visit Date
                </label>
                <input
                  type="date"
                  required
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Message &amp; Experience with Pets
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us if you have current pets, kids, or experience with Singapore Specials..."
                  value={scheduleNotes}
                  onChange={(e) => setScheduleNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold text-sm transition-all duration-150 active:scale-98 shadow-sm cursor-pointer"
                >
                  Confirm Visit Request
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 2. ADOPT APPLICATION MODAL */}
        {activeModal === 'adopt' && (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c4e9cb] text-[#496a52] text-xs font-semibold mb-2">
                <PawPrint className="w-3.5 h-3.5" />
                Adoption Inquiry: <span>{selectedPet ? selectedPet.name : 'Companion'}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#191c1a]">
                Adoption Application
              </h3>
              <p className="text-xs sm:text-sm text-[#57423b] mt-1">
                {selectedPet ? `${selectedPet.age}, ${selectedPet.breed}` : 'Heartland Rescue'}
              </p>
            </div>

            <form onSubmit={handleAdoptSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jason Lim"
                  value={adoptName}
                  onChange={(e) => setAdoptName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jason@example.sg"
                    value={adoptEmail}
                    onChange={(e) => setAdoptEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                    Mobile (+65)
                  </label>
                  <input
                    type="tel"
                    pattern="[89][0-9]{7}"
                    required
                    placeholder="9876 5432"
                    value={adoptPhone}
                    onChange={(e) => setAdoptPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Household Details &amp; Housing Type
                </label>
                <select
                  value={adoptHousing}
                  onChange={(e) => setAdoptHousing(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16] bg-white"
                >
                  <option>HDB Flat (Meshed windows &amp; gate)</option>
                  <option>Condominium / Private Apartment</option>
                  <option>Landed Property</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Message to Shelter Volunteers
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a little about your family schedule, previous experience, and why you feel this pet is the right match..."
                  value={adoptMessage}
                  onChange={(e) => setAdoptMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16] focus:ring-1 focus:ring-[#9f3c16]"
                ></textarea>
              </div>

              <div className="p-3.5 rounded-xl bg-[#ecefea] text-xs sm:text-sm text-[#57423b] flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-[#45664e] shrink-0" />
                <span>
                  Approved adopters receive hand-delivery of their pet along with a starter settlement kit!
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold text-sm transition-all duration-150 active:scale-98 shadow-sm cursor-pointer"
                >
                  Submit Adoption Inquiry
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 3. CONTACT SHELTER MODAL */}
        {activeModal === 'contact' && (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdcbe] text-[#874e00] text-xs font-semibold mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                Direct Communication
              </div>
              <h3 className="text-2xl font-bold text-[#191c1a]">
                Contact Shelter
              </h3>
              <p className="text-xs sm:text-sm text-[#57423b] mt-1 leading-relaxed">
                Connect with our Sungei Tengah caregivers regarding volunteer feeding routes, pet care advice, or corporate sponsorship.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16]"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] focus:outline-hidden focus:border-[#9f3c16]"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={contactTopic}
                  onChange={(e) => setContactTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a] bg-white"
                >
                  <option>General Shelter Inquiry</option>
                  <option>Volunteer Feeding &amp; Walking Program</option>
                  <option>Foster Parent Application</option>
                  <option>Food &amp; Supplies Donation</option>
                  <option>Corporate Sponsorship / CSR</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#191c1a] mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="How can our community help you today?"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-[#dec0b7] text-sm text-[#191c1a]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold text-sm transition-all duration-150 active:scale-98 shadow-sm cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 4. CONFIRMATION MODAL */}
        {activeModal === 'confirmation' && (
          <div className="text-center py-2">
            <div className="w-16 h-16 rounded-full bg-[#c4e9cb] text-[#45664e] mx-auto flex items-center justify-center mb-4 shadow-xs">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-bold text-[#191c1a]">
              Thank you! We've received your request
            </h3>

            <p className="text-sm text-[#57423b] mt-2 leading-relaxed">
              Our shelter adoption volunteers have logged your inquiry and will reach out via WhatsApp/call within{' '}
              <strong className="text-[#191c1a]">24 hours</strong> to discuss the next gentle steps.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-[#ecefea] text-left border border-[#dec0b7]/60">
              <span className="block text-xs sm:text-sm font-bold text-[#191c1a] mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#9f3c16]" />
                What happens next:
              </span>
              <ul className="text-xs sm:text-sm text-[#57423b] space-y-1.5 list-disc list-inside">
                <li>Pre-visit orientation &amp; questionnaire review</li>
                <li>Guided meet-and-greet at Sungei Tengah</li>
                <li>Hand-delivery with settling-in supplies</li>
              </ul>
            </div>

            <div className="mt-6">
              <button
                onClick={onClose}
                type="button"
                className="w-full py-3 rounded-full bg-[#9f3c16] hover:bg-[#bf542c] text-white font-semibold text-sm transition-all duration-150 active:scale-98 cursor-pointer"
              >
                Back to Paws &amp; Home SG
              </button>
            </div>
          </div>
        )}

        {/* 5. PRIVACY POLICY MODAL */}
        {activeModal === 'privacy' && (
          <div>
            <h3 className="text-2xl font-bold text-[#191c1a] mb-3">Privacy &amp; PDPA Commitment</h3>
            <div className="text-xs sm:text-sm text-[#57423b] space-y-3 leading-relaxed">
              <p>
                <strong>Paws &amp; Home SG</strong> (UEN: T20SS0192K) is strictly committed to protecting the privacy and personal data of our donors, adopters, and volunteers in accordance with the Singapore Personal Data Protection Act (PDPA).
              </p>
              <p>
                <strong>Information Collection:</strong> Contact numbers and housing specifications collected via adoption forms are strictly utilized to coordinate safe meet-and-greets and ensure HDB-compliant meshing guidelines.
              </p>
              <p>
                <strong>No Commercial Sharing:</strong> We do not sell, rent, or distribute personal information to third-party commercial marketing agencies under any circumstances.
              </p>
              <p>
                <strong>Questions:</strong> For inquiries regarding your records, please email <span className="text-[#191c1a] font-medium">contact@pawsandhome.org.sg</span>.
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={onClose}
                type="button"
                className="w-full py-2.5 rounded-full bg-[#9f3c16] text-white font-semibold text-sm hover:bg-[#bf542c]"
              >
                Close Privacy Notice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
