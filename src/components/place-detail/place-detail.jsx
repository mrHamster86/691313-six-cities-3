import React from 'react';
import PropTypes from 'prop-types';

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

              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span
                  className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div
                        className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar"
                          src="img/avatar-max.jpg" width="54" height="54"
                          alt="Reviews avatar"/>
                      </div>
                      <span className="reviews__user-name">
                        Max
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{width: `100%`}}/>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river
                        by the unique lightness of Amsterdam. The building is
                        green and from 18th century.
                      </p>
                      <time className="reviews__time"
                        dateTime="2019-04-24">April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label"
                    htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden"
                      name="rating" value="5" id="5-stars" type="radio"/>
                    <label htmlFor="5-stars"
                      className="reviews__rating-label form__rating-label"
                      title="perfect">
                      <svg className="form__star-image" width="37"
                        height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden"
                      name="rating" value="4" id="4-stars" type="radio"/>
                    <label htmlFor="4-stars"
                      className="reviews__rating-label form__rating-label"
                      title="good">
                      <svg className="form__star-image" width="37"
                        height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden"
                      name="rating" value="3" id="3-stars"
                      type="radio"/>
                    <label htmlFor="3-stars"
                      className="reviews__rating-label form__rating-label"
                      title="not bad">
                      <svg className="form__star-image" width="37"
                        height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden"
                      name="rating" value="2" id="2-stars"
                      type="radio"/>
                    <label htmlFor="2-stars"
                      className="reviews__rating-label form__rating-label"
                      title="badly">
                      <svg className="form__star-image" width="37"
                        height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>

                    <input
                      className="form__rating-input visually-hidden"
                      name="rating" value="1" id="1-star" type="radio"/>
                    <label htmlFor="1-star"
                      className="reviews__rating-label form__rating-label"
                      title="terribly">
                      <svg className="form__star-image" width="37"
                        height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea"
                    id="review" name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"/>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span
                        className="reviews__star">rating</span> and describe your
                      stay with at least <b className="reviews__text-amount">50
                      characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button"
                      type="submit" disabled="">Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map"/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the
              neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div
                  className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/room.jpg"
                      width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span
                        className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button
                      className="place-card__bookmark-button place-card__bookmark-button--active button"
                      type="button">
                      <svg className="place-card__bookmark-icon" width="18"
                        height="19">
                        <use xlinkHref="#icon-bookmark"/>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `100%`}}/>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div
                  className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image"
                      src="img/apartment-02.jpg" width="260" height="200"
                      alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
                      <span
                        className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button"
                      type="button">
                      <svg className="place-card__bookmark-icon" width="18"
                        height="19">
                        <use xlinkHref="#icon-bookmark"/>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `100%`}}/>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div
                  className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image"
                      src="img/apartment-03.jpg" width="260" height="200"
                      alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span
                        className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button"
                      type="button">
                      <svg className="place-card__bookmark-icon" width="18"
                        height="19">
                        <use xlinkHref="#icon-bookmark"/>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `100%`}}/>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
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
  }).isRequired
};

export default PlaceDetails;
