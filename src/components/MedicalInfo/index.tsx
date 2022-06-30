import { Container, Title, Text, Small, ItemsContainer, Item } from "./styles";
type MedicalInfoProps = {
  weight: string;
  blood: string;
  height: string;
  diseases: string[];
  allergies: string[];
};
export const MedicalInfo = ({
  weight,
  height,
  blood,
  diseases,
  allergies,
}: MedicalInfoProps) => {
  return (
    <>
      <Container>
        <Title>Informações</Title>
        <ItemsContainer>
          <Item>
            <Small>Peso</Small>
            <Text>{weight}</Text>
          </Item>
          <Item>
            <Small>Altura</Small>
            <Text>{height}</Text>
          </Item>
          <Item>
            <Small>Tipo de sangue</Small>
            <Text>{blood}</Text>
          </Item>
          <Item>
            <Small>Doenças</Small>
            <Text>{diseases}</Text>
          </Item>
          <Item>
            <Small>Alergias</Small>
            <Text>{allergies}</Text>
          </Item>
        </ItemsContainer>
      </Container>
    </>
  );
};
