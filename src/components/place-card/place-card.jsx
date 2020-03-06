import React, {memo} from 'react';
import PropTypes from 'prop-types';

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
  } = props;

  const handleMouseenter = (activeOffer) => onActiveOffer(activeOffer);
  const handleMouseleave = () => onActiveOffer();

  const cardMark = () => (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const articleClassName = () => {
    switch (viewMode) {
      case `main`:
        return `cities__place-card`;
      case `near`:
        return `near-places__card`;
      default:
        return ``;
    }
  };

  const wrapperClassName = () => {
    switch (viewMode) {
      case `main`:
        return `cities__image-wrapper`;
      case `near`:
        return `near-places__image-wrapper`;
      default:
        return ``;
    }
  };

  return (
    <article
      className={`${articleClassName()} place-card`}
    >
      {isPremium && viewMode === `main` ? cardMark() : null}
      <div
        className={`${wrapperClassName()} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image"
            src={picture}
            width="260"
            height="200"
            alt={title}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span
              className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isBookmark && `place-card__bookmark-button--active`}`}
            type="button">
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
          <a
            href="#"
            onMouseEnter={handleMouseenter.bind({}, id)}
            onMouseLeave={handleMouseleave}
          >{title}</a>
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
  onActiveOffer: PropTypes.func.isRequired,
  viewMode: PropTypes.string.isRequired,
};

export default memo(PlaceCard);
