"use client";

import AcmeLogo from "@/assets/logo-acme.png";
import ApexLogo from "@/assets/logo-apex.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import EchoLogo from "@/assets/logo-echo.png";
import PulsLogo from "@/assets/logo-pulse.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  {
    src: AcmeLogo,
    alt: "Acme Logo",
  },
  {
    src: ApexLogo,
    alt: "Apex Logo",
  },
  {
    src: CelestialLogo,
    alt: "Celestial Logo",
  },
  {
    src: EchoLogo,
    alt: "Echo Logo",
  },
  {
    src: PulsLogo,
    alt: "Puls Logo",
  },
  {
    src: QuantumLogo,
    alt: "Quantum Logo",
  },
];

export const LogoTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    setContainerWidth(containerRef.current.scrollWidth);
  }, []);

  return (
    <section className="relative isolate z-1 container bg-white py-8 md:py-12">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          ref={containerRef}
          animate={{ translateX: `-${containerWidth / 2}px` }}
          transition={{
            duration: containerWidth / 100, // Adjust speed based on width
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex w-full gap-x-8 pr-14 opacity-75 lg:gap-x-14"
        >
          {logos.map((logo, index) => (
            <Image
              key={`original-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="h-8 w-auto shrink-0"
            />
          ))}
          {logos.map((logo, index) => (
            <Image
              key={`duplicate-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="h-8 w-auto shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
