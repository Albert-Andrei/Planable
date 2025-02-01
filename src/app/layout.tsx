import "@/styles/globals.css";
import type { Metadata } from "next";
import { DEFAULT_METADATA } from "@/config/constants";
import { RootProvider } from "@/providers/RootProvider";
import { SideBar } from "@/components/sidebar/";

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootProvider>
      <SideBar />
      {children}
    </RootProvider>
  );
}
