import Image from "next/image";
import cx from "classnames";
import styles from "./Section.module.scss";

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
}

export const Section: React.FC<SectionProps> = ({
  height,
  bgColor = "transparent",
  className,
  children,
}) => {
  const colorClassName = `Background_${bgColor}`;
  const mergedClassName = cx(styles.Section, styles[colorClassName], className);

  return (
    <div
      style={{
        height,
      }}
      className={mergedClassName}
    >
      {children}
    </div>
  );
};
