import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./style.module.css";

interface ImageItemProps {
  imageUrl: StaticImageData | string;
}

const ImageItem: React.FC<ImageItemProps> = ({ imageUrl }) => {
  return (
    <div
      className={`${styles.card} border-4 border-[#6b8164] aspect-video overflow-hidden`}
    >
      <Image
        src={imageUrl}
        alt="pitha-image"
        className="w-full h-full object-cover"
        width={300}
        height={270}
      />
    </div>
  );
};

export default ImageItem;
