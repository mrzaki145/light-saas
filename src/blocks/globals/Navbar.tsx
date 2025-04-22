import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import { Button, buttonVariants } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

const TopNavbar = () => (
  <div className="flex items-center justify-center gap-3 bg-black py-3 text-center text-sm">
    <p className="hidden text-white/60 md:block">
      Streamline your workflow and boost your productivity.
    </p>
    <Link
      href="/"
      className="flex items-center justify-center gap-1 text-white"
    >
      <span>Get started for free</span>
      <ArrowRight className="size-4" />
    </Link>
  </div>
);

export const Navbar = () => (
  <>
    <TopNavbar />

    <header className="sticky top-0 z-50 bg-white/25 py-3.5 backdrop-blur-md md:py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={40} height={40} />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              className={buttonVariants({
                variant: "link",
              })}
              href="/"
            >
              About
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
              })}
              href="/"
            >
              Features
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
              })}
              href="/"
            >
              Customers
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
              })}
              href="/"
            >
              Updates
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
              })}
              href="/"
            >
              Pricing
            </Link>

            <Button variant="default" type="button">
              Get for free
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            type="button"
            className="md:hidden"
          >
            <MenuIcon className="size-6!" />
          </Button>
        </div>
      </div>
    </header>
  </>
);
