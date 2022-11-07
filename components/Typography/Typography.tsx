import { Quicksand } from "@next/font/google";
import localfont from "@next/font/local";
import cx from "classnames";

const quicksandNormal = Quicksand({
  weight: "300",
});
const anaktoria = localfont({ src: "../../public/fonts/Anaktoria.woff" });

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
  tag,
  className,
  children,
}) => {
  const Tag = tag;

  return <Tag className={cx(getFontClassName(tag), className)}>{children}</Tag>;
};
