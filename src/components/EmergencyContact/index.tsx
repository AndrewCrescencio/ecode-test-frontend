import { Container, Title, ContactName, ContactNumber, Button } from "./styles";
import type { TEmergencyContact } from "@sharedtypes/medical-profile/emergency-contact";
type EmergencyContactProps = {
  contact: TEmergencyContact;
};
export const EmergencyContact = ({ contact }: EmergencyContactProps) => {
  return (
    <Container>
      <Title>Contato de emergência</Title>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.phone}</ContactNumber>
      {/* {contact.phone} */}
      {/* <Button href={`${contact.phone}`}>Ligar agora</Button> */}
    </Container>
  );
};
