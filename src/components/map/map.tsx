import * as React from 'react';
import * as leaflet from 'leaflet';
import {MapMode} from '../../constatnts';
import {Offer, City} from "../../types";
import {RefObject} from "react";

interface Props {
  activeOffer: number;
  offers: Offer[];
  currentCity: City;
  viewMode: string;
}

type State = null;

class Map extends React.Component<Props, State> {
  props: Props;
  state: State;
  _markers: any;
  _map: any;
  _mapRef: RefObject<HTMLElement>;

  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._map = null;
    this._markers = [];
  }

  _className() {
    const {viewMode} = this.props;
    switch (viewMode) {
      case MapMode.MAIN:
        return `cities__map`;
      case MapMode.NEAR:
        return `property__map`;
      default:
        return ``;
    }
  }

  _getMarkerTemplate(isActive = false) {
    return leaflet.icon({
      iconUrl: isActive ? `/img/pin-active.svg` : `/img/pin.svg`,
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

export default Map;
