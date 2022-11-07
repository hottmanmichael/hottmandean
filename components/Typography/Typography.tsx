import { Quicksand } from "@next/font/google";
import localfont from "@next/font/local";
import cx from "classnames";

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

interface TypographyProps {
  tag: Tag;
  className?: string;
}

const getFontClassName = (tag: Tag) => {
  const isHeader = ["h1", "h2", "h3"].includes(tag);
  return isHeader ? anaktoria.className : quicksandNormal.className;
};

export const Typography: React.FC<TypographyProps> = ({
  tag: Tag,
  className,
  children,
}) => {
  return <Tag className={cx(getFontClassName(Tag), className)}>{children}</Tag>;
};
