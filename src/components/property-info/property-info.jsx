import React, {memo} from 'react';
import PropTypes from 'prop-types';

export const PropertyInfo = (props) => {
  const MAX_RATING = 5;
  const {
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    isPro,
    avatar,
    name,
    description,
  } = props;
  return (
    <>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span
            style={{width: `${(rating / MAX_RATING) * 100}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
        <span
          className="property__rating-value rating__value">{rating}</span>
      </div>

      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {`${bedrooms} Bedrooms`}
        </li>
        <li className="property__feature property__feature--adults">
          {`Max ${maxAdults} adults`}
        </li>
      </ul>

      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>

      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {goods.map((good, index) => (
            <li key={index} className="property__inside-item">
              {good}
            </li>
          ))}
        </ul>
      </div>

      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div
            className={`property__avatar-wrapper ${isPro
              ? `property__avatar-wrapper--pro`
              : ``} user__avatar-wrapper`}>
            <img
              className="property__avatar user__avatar"
              src={`/${avatar}`}
              width="74"
              height="74"
              alt={name}
            />
          </div>
          <span
            className="property__user-name">{name}</span>
        </div>
        <div className="property__description">
          <p className="property__text">{description}</p>
        </div>
      </div>
    </>
  );
};

PropertyInfo.propTypes = {
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPro: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default memo(PropertyInfo);