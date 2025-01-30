import { SFProFont } from "@/config/font";
import { FC, PropsWithChildren } from "react";

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${SFProFont.className} antialiased`}>{children}</body>
    </html>
  );
};
