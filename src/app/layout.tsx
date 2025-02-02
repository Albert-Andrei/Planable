import "@/styles/globals.css";
import type { Metadata } from "next";
import { DEFAULT_METADATA } from "@/config/constants";
import { RootProvider } from "@/providers/RootProvider";
import { SideBar } from "@/components/sidebar/SideBar";
import { NavBar } from "@/components/navbar/NavBar";

// Show 404 for pages that are not generated statically
export const dynamicParams = false;

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
      <NavBar />
      <div className="w-full pl-[232px] max-sm:pl-0 mt-[65px]">
        <div className="p-2">{children}</div>
      </div>
    </RootProvider>
  );
}
