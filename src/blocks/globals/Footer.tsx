import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";

import InstagramIcon from "@/assets/social-insta.svg";
import LinkedInIcon from "@/assets/social-linkedin.svg";
import PinterestIcon from "@/assets/social-pin.svg";
import XIcon from "@/assets/social-x.svg";
import YoutubeIcon from "@/assets/social-youtube.svg";

const footerLinks = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Features",
    href: "/",
  },
  {
    label: "Customers",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/",
  },
  {
    label: "Help",
    href: "/",
  },
  {
    label: "Careers",
    href: "/",
  },
];

export const Footer = () => (
  <footer className="bg-black py-10 text-white">
    <div className="container">
      <div className="space-y-6">
        <Image
          src={Logo}
          className="mx-auto"
          width={60}
          height={60}
          alt="Logo"
        />

        <nav className="flex flex-col items-center justify-center gap-6 lg:flex-row">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-x-2">
          <Link href="/">
            <XIcon className="size-6 text-white/60 transition-colors hover:text-white" />
          </Link>
          <Link href="/">
            <InstagramIcon className="size-6 text-white/60 transition-colors hover:text-white" />
          </Link>
          <Link href="/">
            <LinkedInIcon className="size-6 text-white/60 transition-colors hover:text-white" />
          </Link>
          <Link href="/">
            <PinterestIcon className="size-6 text-white/60 transition-colors hover:text-white" />
          </Link>
          <Link href="/">
            <YoutubeIcon className="size-6 text-white/60 transition-colors hover:text-white" />
          </Link>
        </div>

        <p className="text-center text-sm text-white/60">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
