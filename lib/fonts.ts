import localFont from "next/font/local"

export const phantomSans = localFont({
  src: [
    { path: "../public/font/PhantomSans0.8-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/font/PhantomSans0.8-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/font/PhantomSans0.8-Book.ttf", weight: "350", style: "normal" },
    { path: "../public/font/PhantomSans0.8-BookItalic.ttf", weight: "350", style: "italic" },
    { path: "../public/font/PhantomSans0.8-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/font/PhantomSans0.8-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/font/PhantomSans0.8-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/font/PhantomSans0.8-MedItalic.ttf", weight: "500", style: "italic" },
    { path: "../public/font/PhantomSans0.8-Semibold.ttf", weight: "600", style: "normal" },
    { path: "../public/font/PhantomSans0.8-SemboldItalic.ttf", weight: "600", style: "italic" },
    { path: "../public/font/PhantomSans0.8-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/font/PhantomSans0.8-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-phantom-src",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: false,
})

export const zarathustra = localFont({
  src: "../public/font/zarathustra-kerned.ttf",
  variable: "--font-zarathustra-src",
  display: "swap",
  weight: "400",
  style: "normal",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
  preload: false,
});

export const shantellSans = localFont({
  src: "../public/font/ShantellSans[BNCE,INFM,SPAC,ital,wght].ttf",
  variable: "--font-shantell-src",
  display: "swap",
  weight: "400",
  style: "normal",
  fallback: ["Georgia", "serif"],
  preload: false,
})