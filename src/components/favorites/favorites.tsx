import * as React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import PlacesList from '../places-list/places-list';
import {FavoriteStatus, PlaceListMode} from '../../constatnts';
import {connect} from 'react-redux';
import {
  ActionCreator as ActionCreatorFavorites,
  Operation as OperationFavorites,
} from '../../reducer/favorites/favorites';
import {
  getCitiesList,
  getFavoritesByCity,
  getFavoritesCount,
} from '../../reducer/favorites/selctors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import AppRoute from '../../AppRoute';
import {Link} from 'react-router-dom';
import {ActionCreator as ActionCreatorOffers} from '../../reducer/offers/offers';
import {Offer} from "../../types";

interface Props {
  load: () => void;
  handleSetFavorites: () => void;
  reset: () => void;
  changeCity: (string) => void;
  favoritesCount: number;
  citiesList: string[];
  favoritesByCity: Offer[];
}

type State = null;

export class Favorites extends React.PureComponent<Props, State> {
  props: Props;
  state: State;
  constructor(props) {
    super(props);
    this.props.load();
  }

  _handleCityClick(city) {
    const {changeCity} = this.props;
    changeCity(city);
  }

  _renderFavorites() {
    const {citiesList, favoritesByCity, handleSetFavorites} = this.props;
    return (
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesList.map((city) => (
                <li
                  key={city}
                  className="favorites__locations-items"
                >
                  <div
                    className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link
                        className="locations__item-link"
                        to={AppRoute.MAIN}
                        onClick={this._handleCityClick.bind(this, city)}
                      >
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <PlacesList
                    offers={favoritesByCity[city]}
                    onSetBookmark={handleSetFavorites}
                    viewMode={PlaceListMode.FAVORITES}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    );
  }

  render() {
    const {favoritesCount} = this.props;

    return (
      <div
        className={`page ${favoritesCount > 0 ? `` : `page--favorites-empty`}`}>
        <Header/>
        {favoritesCount > 0 ? this._renderFavorites() : <FavoritesEmpty/>}
        <Footer/>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.reset();
  }
}

const mapStateToProps = (state) => ({
  favoritesCount: getFavoritesCount(state),
  favoritesByCity: getFavoritesByCity(state),
  citiesList: getCitiesList(state),
});

const mapDispatchToProps = {
  load: () => OperationFavorites.load(),
  changeCity: (city) => ActionCreatorOffers.changeCity(city),
  handleSetFavorites: (id, isBookmark) => {
    const status = isBookmark ? FavoriteStatus.ADD : FavoriteStatus.DELETE;
    return OperationFavorites.setFavorites(id, status);
  },
  reset: () => ActionCreatorFavorites.reset(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
