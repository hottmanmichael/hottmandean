import { Quicksand } from "@next/font/google";
import localfont from "@next/font/local";

export const quicksandNormal = Quicksand({
  variable: "--quicksand",
  display: "block",
});

export const anaktoria = localfont({
  src: "../public/fonts/Anaktoria.woff",
  variable: "--anaktoria",
  display: "block",
});
