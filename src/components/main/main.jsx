import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import PlacesSorting from '../places-sorting/places-sorting.jsx';

const Main = (props) => {
  const {offers} = props;
  const placesCount = offers.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in
                Amsterdam</b>
              <PlacesSorting
                booleanFlag={false}
              />
              <PlacesList
                viewMode={`main`}
                offers={offers}
              />
            </section>
            <div className="cities__right-section">
              <Map offers={offers} viewMode={`main`}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.exact({
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
      })
  ).isRequired
};

export default Main;
