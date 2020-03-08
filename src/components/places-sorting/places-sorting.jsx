import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OFFERS_SORT_ITEMS} from '../../constatnts';
import withBooleanState from '../../hocs/with-boolean-state/with-boolean-state';
import {ActionCreator} from '../../reducer/offers/reducer';
import NameSpace from '../../reducer/name-space';

export const PlacesSorting = ({currentSort, changeSort, booleanState, onToggle}) => {
  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={onToggle}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${booleanState && `places__options--opened`}`}>
        {OFFERS_SORT_ITEMS.map((sort) => (
          <li
            key={sort}
            className={`places__option ${sort === currentSort && `places__option--active`}`}
            tabIndex="0"
            onClick={changeSort.bind({}, sort)}
          >{sort}</li>
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  currentSort: state[NameSpace.OFFERS].sort
});

const mapDispatchToProps = {
  changeSort: (sort) => ActionCreator.changeSort(sort)
};

PlacesSorting.propTypes = {
  currentSort: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
  booleanState: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withBooleanState(PlacesSorting));
