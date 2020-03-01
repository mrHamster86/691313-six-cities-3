import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import * as leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = React.createRef();
  }

  get _className() {
    const {viewMode} = this.props;
    switch (viewMode) {
      case `main`:
        return `cities__map`;
      case `near`:
        return `property__map`;
      default:
        return ``;
    }
  }

  render() {
    return (
      <section className={`${this._className} map`} ref={this._map}/>
    );
  }

  componentDidMount() {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(this._map.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    const {offers} = this.props;

    offers.forEach((offer) => {
      leaflet.marker(offer.location, {icon}).addTo(map);
    });
  }
}

Map.propTypes = {
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
        reviews: PropTypes.arrayOf(PropTypes.exact({
          id: PropTypes.number,
          user: PropTypes.string,
          avatar: PropTypes.string,
          rating: PropTypes.number,
          date: PropTypes.string,
          text: PropTypes.string,
        }))
      })
  ).isRequired,
  viewMode: PropTypes.oneOf([`main`, `near`])
};

export default Map;
