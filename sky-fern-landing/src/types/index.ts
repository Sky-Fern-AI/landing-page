export interface BetaSignupForm {
  fullName: string;
  workEmail: string;
  company: string;
  teamSize: string;
  useCase: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}