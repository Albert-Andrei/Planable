import "@/styles/globals.css";
import type { Metadata } from "next";
import { DEFAULT_METADATA } from "@/config/constants";
import { SFProFont } from "@/config/font";

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SFProFont.className} antialiased`}>{children}</body>
    </html>
  );
}
