"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import SpringImg from "@/assets/spring.png";
import StarImg from "@/assets/star.png";
import { Button } from "@/components/button";
import { TextFade } from "@/components/TextFade";
import { useParallax } from "@/hooks/use-parallax";
import { motion } from "motion/react";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const translateY = useParallax(sectionRef, -150);

  return (
    <section
      ref={sectionRef}
      className="bg-linear-180 from-white/0 to-[#D2DCFF]/100 md:from-white/100"
    >
      <div className="relative mx-auto py-24 md:max-w-xl">
        <TextFade
          direction="up"
          margin="0px 0px -25% 0px"
          className="mx-auto mb-10 space-y-5 text-center md:max-w-xl"
        >
          <h2>Sign up for free today</h2>
          <p className="lead">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <div className="mt-14 flex items-center justify-center gap-x-2">
            <Button size="lg">Get for free</Button>
            <Button size="lg" variant="ghost">
              Learn more
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </TextFade>

        <motion.img
          src={SpringImg.src}
          className="pointer-events-none absolute start-full bottom-0 hidden w-[360px] md:block"
          aria-hidden
          alt=""
          style={{ y: translateY }}
        />
        <motion.img
          src={StarImg.src}
          className="pointer-events-none absolute end-full -top-10 hidden w-[360px] md:block"
          aria-hidden
          alt=""
          style={{ y: translateY }}
        />
      </div>
    </section>
  );
};
