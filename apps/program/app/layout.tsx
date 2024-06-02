import "@/styles/globals.css";
import type { Metadata } from "next";
import { inter } from "./styles/fonts";

export const metadata: Metadata = {
  title: "Turborepo Kit",
  description: "Generated by 영원",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}