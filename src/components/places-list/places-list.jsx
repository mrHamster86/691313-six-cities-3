import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
  }

  _handelCardMouseenter(activeCard) {
    this.setState(() => ({
      activeCard,
    }));
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((place) => (
          <PlaceCard
            key={place.id}
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
        id: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired,
      })
  ).isRequired
};

export default PlacesList;
