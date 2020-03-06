import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {citiesList} from '../../selectors';
import {ActionCreator} from '../../reducer';

export const CitiesList = ({currentCity, cities, changeCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.name} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${currentCity.name === city.name && `tabs__item--active`}`}
                onClick={changeCity.bind({}, city)}
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
  currentCity: state.city,
  cities: citiesList(state)
});

const mapDispatchToProps = {
  changeCity: (city) => ActionCreator.changeCity(city)
};

CitiesList.propTypes = {
  currentCity: PropTypes.exact({
    "location": PropTypes.exact({
      "latitude": PropTypes.number,
      "longitude": PropTypes.number,
      "zoom": PropTypes.number
    }),
    "name": PropTypes.string,
  }).isRequired,
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
