import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: -1,
    };
  }

  _handelCardMouseenter(activeCard) {
    this.setState(() => ({
      activeCard,
    }));
  }

  get _className() {
    const {viewMode} = this.props;
    switch (viewMode) {
      case `main`:
        return `cities__places-list tabs__content`;
      case `near`:
        return `near-places__list`;
      default:
        return ``;
    }
  }

  render() {
    const {offers, viewMode} = this.props;

    return (
      <div className={`${this._className} places__list`}>
        {offers.map((place) => (
          <PlaceCard
            key={place.id}
            viewMode={viewMode}
            id={place.id}
            picture={place.picture}
            price={place.price}
            title={place.title}
            type={place.type}
            rating={place.rating}
            isPremium={place.isPremium}
            isBookmark={place.isBookmark}
            onMouseenter={this._handelCardMouseenter}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
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
  ).isRequired,
  viewMode: PropTypes.oneOf([`main`, `near`]).isRequired,
};

export default PlacesList;
