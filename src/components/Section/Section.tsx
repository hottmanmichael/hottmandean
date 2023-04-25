import cx from "classnames";
import styles from "./Section.module.scss";
import { CSSProperties } from "react";

export enum SectionHeight {
  Medium = 500,
  Small = 340,
  Large = 650,
  Full = "100vh",
}

type BackgroundColor =
  | "pastel-green"
  | "pastel-orange"
  | "pastel-pink"
  | "off-white"
  | "transparent";

interface SectionProps {
  height?: SectionHeight;
  bgColor?: BackgroundColor;
  className?: string;
  overflow?: "hidden" | "visible";
  includePadding?: true;
  style?: CSSProperties;
}

export const Section: React.FC<SectionProps> = ({
  height = undefined,
  bgColor = "transparent",
  overflow,
  includePadding,
  className,
  children,
  style,
}) => {
  const colorClassName = `Background_${bgColor}`;
  const mergedClassName = cx(
    styles.Section,
    styles[colorClassName],
    className,
    {
      [styles.IncludePadding]: includePadding,
    }
  );

  return (
    <div
      style={{
        minHeight: height,
        overflow,
        ...style,
      }}
      className={mergedClassName}
    >
      {children}
    </div>
  );
};
