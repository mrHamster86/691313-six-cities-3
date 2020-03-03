import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OFFERS_SORT_ITEMS} from '../../constatnts';
import withBooleanFlag from '../../hocs/with-boolean-flag/with-boolean-flag';

export const PlacesSorting = ({currentSort, changeSort, booleanFlag, onToggleFlag}) => {
  const onSelectSort = (event) => {
    changeSort(event.currentTarget.innerText);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={onToggleFlag}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${booleanFlag && `places__options--opened`}`}>
        {OFFERS_SORT_ITEMS.map((sort) => (
          <li
            key={sort}
            className={`places__option ${sort === currentSort && `places__option--active`}`}
            tabIndex="0"
            onClick={onSelectSort}
          >{sort}</li>
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = ({sort}) => ({
  currentSort: sort
});

const mapDispatchToProps = (dispatch) => ({
  changeSort: (sort) => dispatch({type: `CHANGE_SORT`, payload: {sort}})
});

PlacesSorting.propTypes = {
  currentSort: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
  booleanFlag: PropTypes.bool.isRequired,
  onToggleFlag: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withBooleanFlag(PlacesSorting));
