import { useMemo } from "react";
import { StaticImageData } from "next/image";
import Image from "next/legacy/image";
import styles from "./Blob.module.scss";

import GreenBlob from "/public/images/illustrations/blob1.png";
import PurpleBlob from "/public/images/illustrations/blob-purple.png";
import PinkBlob from "/public/images/illustrations/blob-pink.png";
import OrangeBlob from "/public/images/illustrations/blob-orange.png";
import MultiPinkBlob from "/public/images/illustrations/blob-multi-pink.png";
import CactusLarge from "/public/images/illustrations/cactus1.png";
import CactusMedium from "/public/images/illustrations/cactus2.png";
import CactusSmall from "/public/images/illustrations/cactus3.png";

type ImageType =
  | "green"
  | "purple"
  | "pink"
  | "orange"
  | "multi-pink"
  | "cactus-lg"
  | "cactus-md"
  | "cactus-sm";

const ImageTypeToPngMap: Record<ImageType, StaticImageData> = {
  green: GreenBlob,
  purple: PurpleBlob,
  pink: PinkBlob,
  orange: OrangeBlob,
  "multi-pink": MultiPinkBlob,
  "cactus-lg": CactusLarge,
  "cactus-md": CactusMedium,
  "cactus-sm": CactusSmall,
};

interface BlobProps {
  type: ImageType;

  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  rotation?: number;
  size?: number;
  opacity?: number;
}

export const Blob: React.FC<BlobProps> = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  rotation = 0,
  type = "green",
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
        src={ImageTypeToPngMap[type]}
      />
    </div>
  );
};
