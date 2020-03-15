import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getOfferById} from '../../reducer/offers/selectors';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import PropertyGallery from '../property-gallery/property-gallery.jsx';
import PropertyInfo from '../property-info/property-info.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import {
  ActionCreator as ActionCreatorProperty,
  Operation as OperationProperty,
} from '../../reducer/property/property';
import {getCurrentCity, getNearOffers} from '../../reducer/property/selectors';
import {FavoriteStatus, MapMode, PlaceListMode} from '../../constatnts';
import Map from '../map/map.jsx';
import PlacesList from '../places-list/places-list.jsx';
import {Operation as OperationOffers} from '../../reducer/offers/offers';
import withBooleanState from '../../hocs/with-boolean-state/with-boolean-state';

class OfferDetail extends PureComponent {
  constructor(props) {
    super(props);
    const {offer} = this.props;

    if (offer) {
      this._load();
    }
  }

  _load() {
    const {loadReviews, loadNearOffers, offer, booleanState, onToggle} = this.props;
    if (!booleanState) {
      Promise.all([
        loadReviews(offer.id),
        loadNearOffers(offer.id),
      ]).then(() => onToggle());
    }
  }

  componentDidUpdate() {
    const {nearOffers} = this.props;

    if (!nearOffers.length) {
      this._load();
    }
  }

  render() {
    const {offer, nearOffers, currentCity, setFavoritesNear, setFavorites} = this.props;

    const propertyMark = () => (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    );

    const handleSetFavoritesClick = () => {
      setFavorites(offer.id, offer[`is_favorite`]);
    };

    return (
      <div className="page">
        <Header/>

        {offer && <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <PropertyGallery
                images={offer[`images`]}
                title={offer[`title`]}
              />
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer[`is_premium`] ? propertyMark() : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{offer[`title`]}</h1>
                  <button
                    className={`property__bookmark-button ${offer[`is_favorite`]
                      ? `property__bookmark-button--active`
                      : ``} button`}
                    type="button"
                    onClick={handleSetFavoritesClick}
                  >
                    <svg
                      className="property__bookmark-icon place-card__bookmark-icon"
                      width="31"
                      height="33">
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <PropertyInfo
                  rating={offer.rating}
                  type={offer.type}
                  bedrooms={offer.bedrooms}
                  maxAdults={offer[`max_adults`]}
                  price={offer.price}
                  goods={offer.goods}
                  isPro={offer.host[`is_pro`]}
                  avatar={offer.host[`avatar_url`]}
                  name={offer.host.name}
                  description={offer.description}
                />
                <ReviewsList
                  propertyId={offer.id}
                />
              </div>
            </div>
            {nearOffers.length && <Map
              offers={[...nearOffers, offer]}
              activeOffer={offer.id}
              currentCity={currentCity}
              viewMode={MapMode.NEAR}
            />}
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the
                neighbourhood</h2>
              {nearOffers.length && <PlacesList
                offers={nearOffers}
                onSetBookmark={setFavoritesNear}
                viewMode={PlaceListMode.NEAR}
              />}
            </section>
          </div>
        </main>}
      </div>
    );
  }

  componentWillUnmount() {
    this.props.reset();
  }
}

const mapStateToProps = (state, props) => ({
  offer: getOfferById(state, props),
  nearOffers: getNearOffers(state),
  currentCity: getCurrentCity(state),
});

const mapDispatchToProps = {
  loadReviews: (id) => OperationProperty.loadReviews(id),
  loadNearOffers: (id) => OperationProperty.loadNearOffers(id),
  setFavorites: (id, isBookmark) => {
    const status = isBookmark ? FavoriteStatus.ADD : FavoriteStatus.DELETE;
    return OperationOffers.setFavorites(id, status);
  },
  setFavoritesNear: (id, isBookmark) => {
    const status = isBookmark ? FavoriteStatus.ADD : FavoriteStatus.DELETE;
    return OperationProperty.setFavorites(id, status);
  },
  reset: () => ActionCreatorProperty.reset(),
};

OfferDetail.propTypes = {
  booleanState: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
  loadNearOffers: PropTypes.func.isRequired,
  setFavoritesNear: PropTypes.func.isRequired,
  setFavorites: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
  currentCity: PropTypes.exact({
    'location': PropTypes.exact({
      'latitude': PropTypes.number,
      'longitude': PropTypes.number,
      'zoom': PropTypes.number,
    }),
    'name': PropTypes.string,
  }),
  offer: PropTypes.exact({
    'id': PropTypes.number,
    'preview_image': PropTypes.string,
    'price': PropTypes.number,
    'title': PropTypes.string,
    'type': PropTypes.string,
    'rating': PropTypes.number,
    'is_premium': PropTypes.bool,
    'is_favorite': PropTypes.bool,
    'images': PropTypes.arrayOf(PropTypes.string),
    'bedrooms': PropTypes.number,
    'max_adults': PropTypes.number,
    'goods': PropTypes.arrayOf(PropTypes.string),
    'host': PropTypes.exact({
      'avatar_url': PropTypes.string,
      'id': PropTypes.number,
      'is_pro': PropTypes.bool,
      'name': PropTypes.string,
    }),
    'description': PropTypes.string,
    'location': PropTypes.exact({
      'latitude': PropTypes.number,
      'longitude': PropTypes.number,
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
  }),
  nearOffers: PropTypes.arrayOf(
      PropTypes.exact({
        'id': PropTypes.number,
        'preview_image': PropTypes.string,
        'price': PropTypes.number,
        'title': PropTypes.string,
        'type': PropTypes.string,
        'rating': PropTypes.number,
        'is_premium': PropTypes.bool,
        'is_favorite': PropTypes.bool,
        'images': PropTypes.arrayOf(PropTypes.string),
        'bedrooms': PropTypes.number,
        'max_adults': PropTypes.number,
        'goods': PropTypes.arrayOf(PropTypes.string),
        'host': PropTypes.exact({
          'avatar_url': PropTypes.string,
          'id': PropTypes.number,
          'is_pro': PropTypes.bool,
          'name': PropTypes.string,
        }),
        'description': PropTypes.string,
        'location': PropTypes.exact({
          'latitude': PropTypes.number,
          'longitude': PropTypes.number,
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
      })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withBooleanState(OfferDetail));
