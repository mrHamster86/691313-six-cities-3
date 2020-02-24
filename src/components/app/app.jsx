import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {placesCount, places, titleClickHandler} = props;
  return (
    <Main
      placesCount={placesCount}
      places={places}
      titleClickHandler={titleClickHandler}
    />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.string).isRequired,
  titleClickHandler: PropTypes.func.isRequired,
};

export default App;
