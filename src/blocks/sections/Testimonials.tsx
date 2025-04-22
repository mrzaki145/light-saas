"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { TextFade } from "@/components/TextFade";
import { useParallax } from "@/hooks/use-parallax";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

type Testimonial = (typeof testimonials)[number];

const TestimonialCard = ({ text, imageSrc, name, username }: Testimonial) => (
  <div className="shadow-card mx-auto max-w-2xs space-y-5 rounded-3xl border border-gray-300/10 p-10 md:max-w-none">
    <p>{text}</p>
    <div className="flex items-center gap-x-2">
      <Image
        src={imageSrc}
        alt={name}
        width={40}
        height={40}
        className="size-10 rounded-full"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm font-medium opacity-50">{username}</p>
      </div>
    </div>
  </div>
);

const third = Math.ceil(testimonials.length / 3);

const firstPart = testimonials.slice(0, third);
const secondPart = testimonials.slice(third, 2 * third);
const thirdPart = testimonials.slice(2 * third);

export const Testimonials = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="pb-24">
      <div className="container">
        <TextFade
          direction="up"
          margin="0px 0px -25% 0px"
          className="mx-auto mb-10 space-y-5 text-center md:max-w-xl"
        >
          <h3 className="tag mx-auto">Version 2.0 is here</h3>
          <h2>What our users say</h2>
          <p className="lead">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </TextFade>
      </div>

      <div className="[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-6">
              {firstPart.map((testimonial, idx) => (
                <motion.div
                  style={{ y: translateFirst }} // Apply the translateY motion value here
                  key={"grid-1" + idx}
                >
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-6">
              {secondPart.map((testimonial, idx) => (
                <motion.div
                  style={{ y: translateSecond }} // Apply the translateY motion value here
                  key={"grid-2" + idx}
                >
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-6">
              {thirdPart.map((testimonial, idx) => (
                <motion.div
                  style={{ y: translateThird }} // Apply the translateY motion value here
                  key={"grid-3" + idx}
                >
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// <div className="gap-6 md:columns-2 lg:columns-3">
//   {testimonials.map((testimonial) => (
//     <TestimonialCard key={testimonial.name} {...testimonial} />
//   ))}
// </div>
