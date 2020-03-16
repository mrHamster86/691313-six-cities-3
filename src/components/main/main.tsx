import * as React from 'react';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import PlacesSorting from '../places-sorting/places-sorting';
import Header from '../header/header';
import {connect} from 'react-redux';
import {ActionCreator as ActionCreatorOffers, Operation as OperationOffers} from '../../reducer/offers/offers';
import MainEmpty from '../main-empty/main-empty';
import {FavoriteStatus, MapMode, PlaceListMode} from '../../constatnts';
import {
  getActiveOffer,
  getCityOffers,
  getSelectCity,
} from '../../reducer/offers/selectors';
import {Offer, City} from "../../types";

interface Props {
  offers: Offer[];
  currentCity: City;
  activeOffer: number;
  changeActiveOffer: () => void;
  handleSetFavorites: () => void;
}

export const Main: React.FC<Props> = (props: Props) => {
  const {offers, currentCity, activeOffer, changeActiveOffer, handleSetFavorites} = props;
  const placesCount = offers.length;

  const mainClass = `page__main page__main--index ${placesCount > 0 ? `` : `page__main--index-empty`}`;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList/>
        {placesCount > 0
          ? <div className="cities">
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
          : <MainEmpty/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Main));
