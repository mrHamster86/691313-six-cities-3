import React, {memo} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import {PlaceListMode} from '../../constatnts';

const PlacesList = (props) => {
  const {offers, viewMode, onActiveOffer, onSetBookmark} = props;

  const className = () => {
    switch (viewMode) {
      case PlaceListMode.MAIN:
        return `cities__places-list tabs__content places__list`;
      case PlaceListMode.NEAR:
        return `near-places__list places__list`;
      case PlaceListMode.FAVORITES:
        return `favorites__places`;
      default:
        return ``;
    }
  };

  return (
    <div className={className()}>
      {offers.map((place) => (
        <PlaceCard
          key={place.id}
          viewMode={viewMode}
          id={place.id}
          picture={place[`preview_image`]}
          price={place.price}
          title={place.title}
          type={place.type}
          rating={place.rating}
          isPremium={place[`is_premium`]}
          isBookmark={place[`is_favorite`]}
          onActiveOffer={onActiveOffer}
          onSetBookmark={onSetBookmark}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  onActiveOffer: PropTypes.func,
  onSetBookmark: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.exact({
        'id': PropTypes.number,
        'preview_image': PropTypes.string,
        'price': PropTypes.number,
        'title': PropTypes.string,
        'type': PropTypes.string,
        'rating': PropTypes.number,
        'is_premium': PropTypes.bool,
        'is_favorite': PropTypes.bool,
        'images': PropTypes.arrayOf(PropTypes.string),
        'bedrooms': PropTypes.number,
        'max_adults': PropTypes.number,
        'goods': PropTypes.arrayOf(PropTypes.string),
        'host': PropTypes.exact({
          'avatar_url': PropTypes.string,
          'id': PropTypes.number,
          'is_pro': PropTypes.bool,
          'name': PropTypes.string,
        }),
        'description': PropTypes.string,
        'location': PropTypes.exact({
          'latitude': PropTypes.number,
          'longitude': PropTypes.number,
          'zoom': PropTypes.number,
        }),
        'city': PropTypes.exact({
          'location': PropTypes.exact({
            'latitude': PropTypes.number,
            'longitude': PropTypes.number,
            'zoom': PropTypes.number,
          }),
          'name': PropTypes.string,
        }),
      })
  ).isRequired,
  viewMode: PropTypes.oneOf([PlaceListMode.MAIN, PlaceListMode.NEAR, PlaceListMode.FAVORITES]).isRequired,
};

export default memo(PlacesList);
