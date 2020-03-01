import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';

const PlaceDetails = ({offer}) => {
  const MAX_RATING = 5;
  const {
    price,
    title,
    type,
    rating,
    isPremium,
    isBookmark,
    images,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
    reviews,
  } = offer;

  const propertyMark = () => (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg"
                  alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile"
                    href="#">
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span
                      className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
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
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? propertyMark() : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={`property__bookmark-button ${isBookmark
                  ? `property__bookmark-button--active`
                  : ``} button`}
                type="button">
                  <svg className="property__bookmark-icon" width="31"
                    height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${(rating / MAX_RATING) * 100}%`}}/>
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
                    className={`property__avatar-wrapper ${host.isPro
                      ? `property__avatar-wrapper--pro`
                      : ``} user__avatar-wrapper`}>
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatar}
                      width="74"
                      height="74"
                      alt={host.name}
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <ReviewsList reviews={reviews}/>
            </div>
          </div>
          <Map offers={[offer, offer, offer]} viewMode={`near`}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the
              neighbourhood</h2>
            <PlacesList
              offers={[offer, offer, offer]}
              viewMode={`near`}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

PlaceDetails.propTypes = {
  offer: PropTypes.exact({
    id: PropTypes.number,
    picture: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
    isBookmark: PropTypes.bool,
    images: PropTypes.arrayOf(PropTypes.string),
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.exact({
      avatar: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string,
    }),
    description: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number),
    reviews: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number,
      user: PropTypes.string,
      avatar: PropTypes.string,
      rating: PropTypes.number,
      date: PropTypes.string,
      text: PropTypes.string,
    }))
  }).isRequired
};

export default PlaceDetails;
