import Link from "next/link";
import Image from "next/image";
import { getImage } from "@/assets/images";

export interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={className || "flex gap-2 items-center"}>
      <Image
        src={getImage("logo").src}
        alt="Splendori"
        width={151.08}
        height={37.08}
        className="w-[151.08px] h-[37.08px]"
      />
    </Link>
  );
};

export default Logo;
