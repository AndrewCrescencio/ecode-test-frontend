import { Button } from "./styles";
import backIcon from "public/assets/caret-left.svg";
import Image from "next/image";
import Link from "next/link";
export const HomeButton = () => {
  return (
    <Link href="/">
      <Button>
        <Image
          src={backIcon}
          width={20}
          height={20}
          alt="Volte pra Home icon"
        />
      </Button>
    </Link>
  );
};
