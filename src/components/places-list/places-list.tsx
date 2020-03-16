import * as React from 'react';
import PlaceCard from '../place-card/place-card';
import {PlaceListMode} from '../../constatnts';
import {Offer} from "../../types";

interface Props {
  offers: Offer[];
  viewMode: string;
  onActiveOffer?: () => void;
  onSetBookmark: (number, boolean) => void;
}

const PlacesList: React.FC<Props> = (props: Props) => {
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

export default React.memo(PlacesList);
