import type { Metadata } from "next";
import "./globals.css";

export const  metadata: Metadata={
title: "Maleesha Sewmini | Developer Portfolio",
  description:
    "Portfolio of Maleesha Sewmini, a Computing and Information Systems undergraduate interested in software development, web technologies, data, and continuous learning.",
  keywords: [
    "Maleesha Sewmini",
    "Developer",
    "Next.js",
    "Java",
    "Web Development",
    "Computing and Information Systems",
  ],
  authors: [{ name: "Maleesha Sewmini" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
