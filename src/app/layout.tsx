import "./globals.css";

import { Footer, Navbar } from "@/blocks";
import { Lenis } from "@/components/lenis";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>

      <body className={dmSans.className}>
        <Lenis>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Lenis>
      </body>
    </html>
  );
}
