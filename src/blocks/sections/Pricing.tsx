"use client";

import CheckIcon from "@/assets/check.svg";
import { Button } from "@/components/button";
import { TextFade } from "@/components/TextFade";
import { cn } from "@/utils";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

type PricingTier = (typeof pricingTiers)[number];

const PricingTier = ({
  title,
  monthlyPrice,
  buttonText,
  popular,
  inverse,
  features,
}: PricingTier) => (
  <div
    className={cn(
      "shadow-card flex max-w-80 flex-col gap-y-6 rounded-3xl px-6 py-10 md:max-w-none md:gap-y-8 md:px-10",
      {
        "bg-white text-black": !inverse,
        "bg-black text-white": inverse,
      },
    )}
  >
    <div className="flex items-center justify-between">
      <h3
        className={cn(["text-lg font-bold"], {
          "text-white/50": inverse,
          "text-black/50": !inverse,
        })}
      >
        {title}
      </h3>

      {popular && (
        <span className="tag rainbow-text border border-white/20">
          Most Popular
        </span>
      )}
    </div>

    <div className="flex items-end gap-x-1 font-bold">
      <span className="text-4xl">${monthlyPrice}</span>
      <span className="opacity-50">/month</span>
    </div>

    <Button
      className="w-full"
      variant={inverse ? "secondary" : "default"}
      size="lg"
    >
      {buttonText}
    </Button>

    <ul className="space-y-5">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-x-6">
          <CheckIcon className="size-6" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export const Pricing = () => (
  <section className="container py-24">
    <TextFade
      direction="up"
      margin="0px 0px -25% 0px"
      className="mx-auto mb-10 space-y-5 text-center md:max-w-xl"
    >
      <h2>Pricing</h2>
      <p className="lead">
        Free forever. Upgrade for unlimited tasks, better security, and
        exclusive features.
      </p>
    </TextFade>

    <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3 md:justify-items-stretch lg:items-end">
      {pricingTiers.map((tier) => (
        <PricingTier key={tier.title} {...tier} />
      ))}
    </div>
  </section>
);
