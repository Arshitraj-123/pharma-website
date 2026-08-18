import React, { useState } from 'react';
import { images } from '../data/images';

export default function ImageFallback({ src, alt, className, style, priority = false }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`object-cover ${className}`}
      style={style}
      onError={() => setImgSrc(images.fallback)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
