import Avatar from "@components/Avatar";
import { MedicalInfo } from "@components/MedicalInfo";
import { EmergencyContact } from "@components/EmergencyContact";
import { Container } from "./styles";
import { HomeButton } from "@components/HomeButton";

import type { TMedicalProfile } from "@sharedtypes/medical-profile/medical-profile";

type MedicalProfileProps = {
  content: TMedicalProfile;
};
export const MedicalProfile = ({ content }: MedicalProfileProps) => {
  return (
    <Container>
      <HomeButton />
      <Avatar
        name={content.name}
        text={content.birthdate}
        avatarUrl={content.avatar_url}
      />
      <MedicalInfo
        weight={content.weight}
        height={content.height}
        blood={content.blood_type}
        diseases={content.diseases}
        allergies={content.allergies}
      />
      <EmergencyContact contact={content.emergency_contact} />
    </Container>
  );
};
