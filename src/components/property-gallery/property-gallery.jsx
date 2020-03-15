import React, {memo} from 'react';
import PropTypes from 'prop-types';

export const PropertyGallery = ({images, title}) => {
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

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(PropertyGallery);
