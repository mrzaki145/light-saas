"use client";

import ProductImg from "@/assets/product-image.png";
import PyramidImg from "@/assets/pyramid.png";
import TubeImg from "@/assets/tube.png";
import { TextFade } from "@/components/TextFade";
import { useParallax } from "@/hooks/use-parallax";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const translateY = useParallax(sectionRef, -100);

  return (
    <section
      ref={sectionRef}
      className="bg-linear-180 from-white/0 to-[#D2DCFF]/100 py-24 md:from-white/100"
    >
      <div className="container">
        <TextFade
          direction="up"
          margin="0px 0px -25% 0px"
          className="mx-auto mb-10 space-y-5 text-center md:max-w-xl"
        >
          <h3 className="tag mx-auto">Boost your productivity</h3>
          <h2>A more effective way to track progress</h2>
          <p className="lead">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </TextFade>

        <div className="relative">
          <Image src={ProductImg} alt="Product" />

          <motion.img
            src={PyramidImg.src}
            className="pointer-events-none absolute -end-32 -top-32 hidden w-[262px] md:block"
            aria-hidden
            alt=""
            style={{ translateY }}
          />
          <motion.img
            src={TubeImg.src}
            className="pointer-events-none absolute -start-32 bottom-20 hidden w-[248px] md:block"
            aria-hidden
            alt=""
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
