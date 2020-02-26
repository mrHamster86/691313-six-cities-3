import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {offers} = props;
  return (
    <Main
      offers={offers}
    />
  );
};

App.propTypes = {
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

export default App;
