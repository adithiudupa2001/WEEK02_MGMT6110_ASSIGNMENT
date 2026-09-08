export interface Pet {
  id: string;
  name: string;
  age: string;
  breed: string;
  type: 'dog' | 'cat';
  tags: string[];
  description: string;
  image: string;
  altText: string;
  gender?: 'Male' | 'Female';
  hdbApproved?: boolean;
}

export interface DonationTier {
  amount: number;
  title: string;
  subtitle: string;
  impactDescription: string;
}

export type ModalType = 'schedule' | 'adopt' | 'contact' | 'confirmation' | 'privacy' | null;

export interface VisitFormData {
  petName: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  notes: string;
}

export interface AdoptFormData {
  petName: string;
  petSummary: string;
  fullName: string;
  email: string;
  phone: string;
  housingType: string;
  message: string;
}
