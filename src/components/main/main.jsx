import React, {memo} from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import PlacesSorting from '../places-sorting/places-sorting.jsx';
import Header from '../header/header.jsx';
import {connect} from 'react-redux';
import {ActionCreator as ActionCreatorOffers, Operation as OperationOffers} from '../../reducer/offers/offers';
import MainEmpty from '../main-empty/main-empty.jsx';
import {FavoriteStatus, MapMode, PlaceListMode} from '../../constatnts';
import {
  getActiveOffer,
  getCityOffers,
  getSelectCity,
} from '../../reducer/offers/selectors';

export const Main = (props) => {
  const {offers, currentCity, activeOffer, changeActiveOffer, handleSetFavorites} = props;
  const placesCount = offers.length;

  const renderMain = () => (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in {currentCity.name}</b>
          <PlacesSorting/>
          <PlacesList
            viewMode={PlaceListMode.MAIN}
            offers={offers}
            onActiveOffer={changeActiveOffer}
            onSetBookmark={handleSetFavorites}
          />
        </section>
        <div className="cities__right-section">
          <Map
            offers={offers}
            currentCity={currentCity}
            activeOffer={activeOffer}
            viewMode={MapMode.MAIN}
          />
        </div>
      </div>
    </div>
  );

  const mainClass = `page__main page__main--index ${placesCount > 0 ? `` : `page__main--index-empty`}`;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList/>
        {placesCount > 0 ? renderMain() : <MainEmpty/>}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentCity: getSelectCity(state),
  activeOffer: getActiveOffer(state),
  offers: getCityOffers(state),
});

const mapDispatchToProps = {
  changeActiveOffer: (activeOffer) => ActionCreatorOffers.changeActiveOffer(activeOffer),
  handleSetFavorites: (id, isBookmark) => {
    const status = isBookmark ? FavoriteStatus.ADD : FavoriteStatus.DELETE;
    return OperationOffers.setFavorites(id, status);
  },
};

Main.propTypes = {
  activeOffer: PropTypes.number.isRequired,
  currentCity: PropTypes.exact({
    "location": PropTypes.exact({
      "latitude": PropTypes.number,
      "longitude": PropTypes.number,
      "zoom": PropTypes.number
    }),
    "name": PropTypes.string,
  }),
  offers: PropTypes.arrayOf(
      PropTypes.exact({
        "id": PropTypes.number,
        "preview_image": PropTypes.string,
        "price": PropTypes.number,
        "title": PropTypes.string,
        "type": PropTypes.string,
        "rating": PropTypes.number,
        "is_premium": PropTypes.bool,
        "is_favorite": PropTypes.bool,
        "images": PropTypes.arrayOf(PropTypes.string),
        "bedrooms": PropTypes.number,
        "max_adults": PropTypes.number,
        "goods": PropTypes.arrayOf(PropTypes.string),
        "host": PropTypes.exact({
          "avatar_url": PropTypes.string,
          "id": PropTypes.number,
          "is_pro": PropTypes.bool,
          "name": PropTypes.string,
        }),
        "description": PropTypes.string,
        "location": PropTypes.exact({
          "latitude": PropTypes.number,
          "longitude": PropTypes.number,
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
      })),
  changeActiveOffer: PropTypes.func.isRequired,
  handleSetFavorites: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(memo(Main));
