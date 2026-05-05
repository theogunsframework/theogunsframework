import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OGUNS TECH FRAMEWORK | Premium Logistics & Mobility",
  description:
    "Nigeria's premier logistics and mobility platform. Car & motorbike transport, interstate haulage, airport hire, and importation services.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-256.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
