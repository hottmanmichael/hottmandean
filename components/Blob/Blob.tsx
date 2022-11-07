import { useMemo } from "react";
import Image from "next/legacy/image";
import styles from "./Blob.module.scss";

type BlobColor =
  | "green"
  | "purple"
  | "pink"
  | "orange"
  | "multi-pink"
  | "cactus1"
  | "cactus2"
  | "cactus3";

const ColorToPngMap: Record<BlobColor, string> = {
  green: require("../../public/images/illustrations/blob1.png"),
  purple: require("../../public/images/illustrations/blob-purple.png"),
  pink: require("../../public/images/illustrations/blob-pink.png"),
  orange: require("../../public/images/illustrations/blob-orange.png"),
  "multi-pink": require("../../public/images/illustrations/blob-multi-pink.png"),
  cactus1: require("../../public/images/illustrations/cactus1.png"),
  cactus2: require("../../public/images/illustrations/cactus2.png"),
  cactus3: require("../../public/images/illustrations/cactus3.png"),
};

interface BlobProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  rotation?: number;
  color?: BlobColor;
  size?: number;
  opacity?: number;
}

export const Blob: React.FC<BlobProps> = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  rotation = 0,
  color = "green",
  size = 600,
  opacity = 0.4,
}) => {
  const style = useMemo(() => {
    return {
      opacity,
      // Location
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
      // Level out only if used
      top: top ? 0 : undefined,
      right: right ? 0 : undefined,
      bottom: bottom ? 0 : undefined,
      left: left ? 0 : undefined,
    };
  }, [top, right, bottom, left, opacity]);

  return (
    <div
      className={styles.Blob}
      style={{
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      <Image
        alt="background"
        height={size}
        width={size}
        objectPosition="center"
        className={styles.BackgroundImage}
        src={ColorToPngMap[color]}
      />
    </div>
  );
};
