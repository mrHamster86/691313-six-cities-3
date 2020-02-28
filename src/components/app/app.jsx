import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PlaceDetails from '../place-detail/place-detail.jsx';

const App = (props) => {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact patch="/">
          <Main
            offers={offers}
          />
        </Route>
        <Route exact patch="/dev">
          <PlaceDetails offer={offers[0]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired,
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
      })
  ).isRequired
};

export default App;
