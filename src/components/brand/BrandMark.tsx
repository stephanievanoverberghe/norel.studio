import Image from "next/image";

import norelLogo from "../../../public/images/norel-logo.png";

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={norelLogo}
        alt="Norel Art"
        width={407}
        height={136}
        className="h-auto w-36 object-contain sm:w-40"
        priority
      />
    </span>
  );
}
