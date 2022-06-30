import { Name, Text, Wrapper } from "./styles";
import Image from "next/image";
type AvatarProps = {
  avatarUrl: string;
  name: string;
  text: string;
};
const Avatar = ({ avatarUrl, name, text }: AvatarProps) => (
  <Wrapper>
    <Image src={avatarUrl} width={120} height={120} alt="avatar image" />
    <Name as="h1">{name}</Name>
    <Text>{text}</Text>
  </Wrapper>
);
export default Avatar;
