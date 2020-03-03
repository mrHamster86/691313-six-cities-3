import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PlaceDetails from '../place-detail/place-detail.jsx';
import {connect} from 'react-redux';

export const App = (props) => {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact patch="/">
          <Main
            offers={offers}
          />
        </Route>
        <Route patch="/dev-component">
          <PlaceDetails offer={offers[0]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offers.filter((offer) => offer.city === state.city),
});

App.propTypes = {
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
      })
  ).isRequired
};

export default connect(mapStateToProps, null)(App);
