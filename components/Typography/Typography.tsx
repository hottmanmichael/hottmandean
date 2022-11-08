import { Quicksand } from "@next/font/google";
import localfont from "@next/font/local";
import cx from "classnames";

import styles from "./Typography.module.scss";

const quicksandNormal = Quicksand({
  preload: true,
  variable: "--quicksand",
});
const anaktoria = localfont({
  src: "../../public/fonts/Anaktoria.woff",
  preload: true,
  variable: "--anaktoria",
});

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "b" | "span";
type Font = "quicksand" | "anaktoria";

interface TypographyProps {
  tag: Tag;
  className?: string;
  bold?: boolean;
  font?: Font;
  weight?: "100" | "300" | "500" | "700" | "900";
}

const getFontClassName = (tag: Tag, font?: Font) => {
  if (font) {
    return font === "anaktoria"
      ? anaktoria.className
      : quicksandNormal.className;
  }

  const isHeader = ["h1", "h2", "h3"].includes(tag);
  return isHeader ? anaktoria.className : quicksandNormal.className;
};

export const Typography: React.FC<TypographyProps> = ({
  tag: Tag,
  className,
  bold = false,
  font,
  weight,
  children,
}) => {
  return (
    <Tag
      className={cx(
        getFontClassName(Tag, font),
        {
          [styles.Typography__Bold]: bold,
          [`styles.Typography__Weight--${weight}`]: !!weight,
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};
