import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {PlaceListMode} from '../../constatnts';

const PlaceCard = (props) => {
  const MAX_RATING = 5;
  const {
    id,
    picture,
    price,
    title,
    type,
    rating,
    isPremium,
    isBookmark,
    onActiveOffer,
    viewMode,
    onSetBookmark,
  } = props;
  const offerLink = `/offer/${id}`;

  const handleMouseenter = () => onActiveOffer && onActiveOffer(id);
  const handleMouseleave = () => onActiveOffer && onActiveOffer();
  const handleBookmarkClick = () => onSetBookmark(id, isBookmark);

  const cardMark = () => (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const articleClass = () => {
    switch (viewMode) {
      case PlaceListMode.MAIN:
        return `cities__place-card`;
      case PlaceListMode.NEAR:
        return `near-places__card`;
      case PlaceListMode.FAVORITES:
        return `favorites__card`;
      default:
        return ``;
    }
  };

  const wrapperClass = () => {
    switch (viewMode) {
      case PlaceListMode.MAIN:
        return `cities__image-wrapper`;
      case PlaceListMode.NEAR:
        return `near-places__image-wrapper`;
      case PlaceListMode.FAVORITES:
        return `favorites__image-wrapper`;
      default:
        return ``;
    }
  };

  const infoClass = () => {
    switch (viewMode) {
      case PlaceListMode.FAVORITES:
        return `favorites__card-info`;
      default:
        return ``;
    }
  };

  const imageSize = () => {
    switch (viewMode) {
      case PlaceListMode.FAVORITES:
        return {width: 150, height: 110};
      default:
        return {width: 260, height: 200};
    }
  };

  return (
    <article
      className={`${articleClass()} place-card`}
      onMouseEnter={handleMouseenter}
      onMouseLeave={handleMouseleave}
    >
      {isPremium && viewMode === `main` ? cardMark() : null}
      <div
        className={`${wrapperClass()} place-card__image-wrapper`}>
        <a href={picture}>
          <img className="place-card__image"
            src={picture}
            width={imageSize().width}
            height={imageSize().height}
            alt={title}
          />
        </a>
      </div>
      <div className={`${infoClass()} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span
              className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isBookmark && `place-card__bookmark-button--active`}`}
            type="button"
            onClick={handleBookmarkClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span
              className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(rating / MAX_RATING) * 100}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  viewMode: PropTypes.string.isRequired,
  onActiveOffer: PropTypes.func,
  onSetBookmark: PropTypes.func.isRequired,
};

export default memo(PlaceCard);
