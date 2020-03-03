import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export const CitiesList = ({currentCity, cities, changeCity}) => {
  const onChangeCity = (event) => {
    event.preventDefault();
    changeCity(event.target.innerText);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${currentCity === city && `tabs__item--active`}`}
                onClick={onChangeCity}
                href="#"
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const mapStateToProps = ({offers, city}) => ({
  currentCity: city,
  cities: offers.reduce((accumulator, offer) => {
    return accumulator.includes(offer.city) ? accumulator : [...accumulator, offer.city];
  }, [])
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch({type: `CHANGE_CITY`, payload: {city}})
});

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
