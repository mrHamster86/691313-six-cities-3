import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as leaflet from 'leaflet';

class Map extends Component {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._map = null;
    this._markers = [];
  }

  _className() {
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

  _getMarkerTemplate(isActive = false) {
    return leaflet.icon({
      iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
      iconSize: [30, 30],
    });
  }

  _initMap(props) {
    const {currentCity: {location}} = props;
    const city = [location.latitude, location.longitude];
    const zoom = location.zoom;

    this._map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this._map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
    }).addTo(this._map);
  }

  _addMarkers() {
    const {offers, activeOffer} = this.props;


    offers.forEach((offer) => {
      const {location: {latitude, longitude}} = offer;
      const coordinates = [latitude, longitude];
      const isActive = offer.id === activeOffer;

      const icon = this._getMarkerTemplate(isActive);
      const marker = leaflet.marker(coordinates, {icon}).addTo(this._map);
      this._markers.push(marker);
    });
  }

  _clearMarkers() {
    this._markers.forEach((marker) => {
      this._map.removeLayer(marker);
    });
    this._markers = [];
  }

  shouldComponentUpdate(nextProps) {
    const nextCurrentCity = nextProps.currentCity.name;
    const currentCity = this.props.currentCity.name;
    const nextActiveOffer = nextProps.activeOffer;
    const activeOffer = this.props.activeOffer;

    if (nextCurrentCity !== currentCity) {
      this._map.remove();
      this._initMap(nextProps);
      this._addMarkers();
      return true;
    }

    if (nextActiveOffer !== activeOffer) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <section className={`${this._className()} map`} ref={this._mapRef}/>
    );
  }

  componentDidMount() {
    this._initMap(this.props);
    this._addMarkers();
  }

  componentDidUpdate() {
    this._clearMarkers();
    this._addMarkers();
  }

  componentWillUnmount() {
    this._map.remove();
    this._clearMarkers();
  }
}

Map.propTypes = {
  activeOffer: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
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
    }),
  ).isRequired,
  currentCity: PropTypes.exact({
    'location': PropTypes.exact({
      'latitude': PropTypes.number,
      'longitude': PropTypes.number,
      'zoom': PropTypes.number,
    }),
    'name': PropTypes.string,
  }).isRequired,
  viewMode: PropTypes.oneOf([`main`, `near`]),
};

export default Map;
