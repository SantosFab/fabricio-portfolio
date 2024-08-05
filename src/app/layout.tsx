import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StyledComponentsRegistry } from "@/lib/registry";
import { ThemeClient } from "@/lib/ThemeClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio do desenvolvedor Fabrício Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeClient>{children}</ThemeClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
