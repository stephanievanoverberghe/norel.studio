import Image from "next/image";

import norelMark from "../../../public/images/norel-mark.png";

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Norel Art">
      <Image src={norelMark} alt="" width={48} height={48} className="size-10 object-contain sm:size-11" priority />
      <span className="font-heading text-[1.65rem] leading-none tracking-[0.04em] text-white sm:text-[1.9rem]">
        Norel <span className="text-white/70">Art</span>
      </span>
    </span>
  );
}
