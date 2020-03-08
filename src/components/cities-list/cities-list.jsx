import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {citiesList} from '../../reducer/offers/selectors';
import {ActionCreator} from '../../reducer/offers/reducer';
import NameSpace from '../../reducer/name-space';

export const CitiesList = ({selectCity, cities, changeCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.name} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${selectCity === city.name && `tabs__item--active`}`}
                onClick={changeCity.bind({}, city.name)}
                href="#"
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectCity: state[NameSpace.OFFERS].city,
  cities: citiesList(state)
});

const mapDispatchToProps = {
  changeCity: (city) => ActionCreator.changeCity(city)
};

CitiesList.propTypes = {
  selectCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(
      PropTypes.exact({
        "location": PropTypes.exact({
          "latitude": PropTypes.number,
          "longitude": PropTypes.number,
          "zoom": PropTypes.number
        }),
        "name": PropTypes.string
      })).isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
