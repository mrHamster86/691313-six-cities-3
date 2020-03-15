import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCity} from '../../reducer/offers/selectors';

export const MainEmpty = ({cityName}) => {
  return (
    <div className="cities">
      <div
        className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any
              property availbale at the moment in {cityName}</p>
          </div>
        </section>
        <div className="cities__right-section"/>
      </div>
    </div>
  );
};

MainEmpty.propTypes = {
  cityName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cityName: getCity(state),
});

export default connect(mapStateToProps, null)(MainEmpty);
