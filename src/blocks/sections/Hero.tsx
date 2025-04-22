"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import CogImg from "@/assets/cog.png";
import CylinderImg from "@/assets/cylinder.png";
import NoodleImg from "@/assets/noodle.png";
import { Button } from "@/components/button";
import { TextFade } from "@/components/TextFade";
import { useParallax } from "@/hooks/use-parallax";
import { motion } from "motion/react";
import { useRef } from "react";

const HeroContent = () => (
  <div className="flex-1 md:min-w-[480px]">
    <TextFade direction="up" className="mb-8 space-y-6">
      <h3 className="tag">Version 2.0 is here</h3>
      <h1 className="section-title text-5xl leading-none font-extrabold md:text-7xl">
        Pathway to <br /> productivity
      </h1>
      <p className="text-primary text-lg text-balance md:text-xl/snug">
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes.
      </p>

      <div className="flex items-center gap-x-2">
        <Button size="lg">Get for free</Button>
        <Button size="lg" variant="ghost">
          Learn more
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </TextFade>
  </div>
);

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const translateY = useParallax(heroRef, -100);

  return (
    <section
      ref={heroRef}
      className="relative isolate z-2 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#FFFFFF_90%)] pt-8 pb-16 md:pt-10"
    >
      <div className="container">
        <div className="flex flex-col gap-y-20 md:flex-row md:items-center">
          <HeroContent />

          <div className="relative flex flex-1 items-center justify-start">
            <motion.img
              src={CogImg.src}
              className="pointer-events-none w-full md:aspect-square md:min-h-[650px] md:w-auto md:max-w-none lg:w-[110%]"
              viewport={{ once: false, amount: 0.5 }}
              whileInView={{
                translateY: [-20, 20],
                transition: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
              alt=""
            />
            <motion.img
              src={CylinderImg.src}
              className="pointer-events-none absolute -start-32 -top-8 hidden w-[220px] md:block"
              aria-hidden
              alt=""
              style={{ y: translateY }}
            />
            <motion.img
              src={NoodleImg.src}
              className="pointer-events-none absolute -end-20 -bottom-28 hidden w-[220px] md:block"
              aria-hidden
              alt=""
              style={{ rotate: 30, y: translateY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
