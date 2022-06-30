import type { TAllergies } from "./allergies";
import type { TEmergencyContact } from "./emergency-contact";
import type { TDiseases } from "./diseases";

export type TMedicalProfile = {
  name: string;
  avatar_url: string;
  weight: string;
  height: string;
  blood_type: string;
  diseases: TDiseases;
  allergies: TAllergies;
  emergency_contact: TEmergencyContact;
  birthdate: string;
  age: number;
};
