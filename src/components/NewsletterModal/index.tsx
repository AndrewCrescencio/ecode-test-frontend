import { Container, Modal, Text, Button } from "./styles";
type NewsletterModalProps = {
  modalOpen: boolean;
  closeModal: () => void;
};
export const NewsletterModal = ({
  modalOpen,
  closeModal,
}: NewsletterModalProps) => {
  return (
    <Container className={modalOpen ? "open" : ""}>
      <Modal>
        <Text>Inscrição realizada com sucesso!</Text>
        <Button onClick={() => closeModal()}>Fechar</Button>
      </Modal>
    </Container>
  );
};
