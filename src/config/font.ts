import localFont from "next/font/local";

export const SFProFont = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro-Text-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Text-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Text-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
