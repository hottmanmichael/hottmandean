import { useMemo } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./Blob.module.scss";

import GreenBlob from "/public/images/illustrations/blob1.png";
import PurpleBlob from "/public/images/illustrations/blob-purple.png";
import PinkBlob from "/public/images/illustrations/blob-pink.png";
import OrangeBlob from "/public/images/illustrations/blob-orange.png";
import BlueBlob from "/public/images/illustrations/blob-blue.png";
import MultiPinkBlob from "/public/images/illustrations/blob-multi-pink.png";
import MultiPurpleBlob from "/public/images/illustrations/blob-multi-purple.png";
import Cactus1 from "/public/images/illustrations/cactus1.png";
import Cactus2 from "/public/images/illustrations/cactus2.png";
import Cactus3 from "/public/images/illustrations/cactus3.png";
import Cactus4 from "/public/images/illustrations/cactus4.png";
import Cactus5 from "/public/images/illustrations/cactus5.png";
import Cactus6 from "/public/images/illustrations/cactus6.png";
import Cactus7 from "/public/images/illustrations/cactus7.png";

type ImageType =
  | "green"
  | "purple"
  | "pink"
  | "orange"
  | "blue"
  | "multi-purple"
  | "multi-pink"
  | "cactus1"
  | "cactus2"
  | "cactus3"
  | "cactus4"
  | "cactus5"
  | "cactus6"
  | "cactus7";

const ImageTypeToPngMap: Record<ImageType, StaticImageData> = {
  green: GreenBlob,
  purple: PurpleBlob,
  pink: PinkBlob,
  orange: OrangeBlob,
  blue: BlueBlob,
  "multi-pink": MultiPinkBlob,
  "multi-purple": MultiPurpleBlob,
  cactus1: Cactus1,
  cactus2: Cactus2,
  cactus3: Cactus3,
  cactus4: Cactus4,
  cactus5: Cactus5,
  cactus6: Cactus6,
  cactus7: Cactus7,
};

interface BlobProps {
  type: ImageType;

  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  rotation?: number;
  size?: number | { height: number; width: number };
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
  opacity = 1,
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

  const height = typeof size === "number" ? size : size.height;
  const width = typeof size === "number" ? size : size.width;

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
        height={height}
        width={width}
        className={styles.BackgroundImage}
        src={ImageTypeToPngMap[type]}
        style={{
          maxWidth: "100%",
          height: "auto",
          objectPosition: "center",
        }}
      />
    </div>
  );
};
