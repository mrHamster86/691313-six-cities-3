import * as React from 'react';

interface Props {
  images: string[];
  title: string;
}

export const PropertyGallery: React.FC<Props> = ({images, title}: Props) => {
  const MAX_IMAGES = 6;
  images.length = images.length > MAX_IMAGES
    ? MAX_IMAGES
    : images.length;

  return (
    <div className="property__gallery">
      {images.map((img, index) => (
        <div key={index} className="property__image-wrapper">
          <img
            className="property__image"
            src={img}
            alt={title}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(PropertyGallery);
