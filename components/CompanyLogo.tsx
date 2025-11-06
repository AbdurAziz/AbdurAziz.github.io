"use client";

import Image from "next/image";

type CompanyLogoProps = {
  company: string;
  size?: number;
};

export function CompanyLogo({ company, size = 32 }: CompanyLogoProps) {
  const logos: Record<string, string> = {
    "Chevron": "/logos/chevron.png",
    "BP": "/logos/bp.png",
    "Frigate": "/logos/frigate.png"
  };

  const logoPath = logos[company];
  
  if (!logoPath) return null;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <Image
        src={logoPath}
        alt={`${company} logo`}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
}