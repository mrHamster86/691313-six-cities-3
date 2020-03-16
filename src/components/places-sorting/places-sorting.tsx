import * as React from 'react';
import {connect} from 'react-redux';
import {OFFERS_SORT_ITEMS} from '../../constatnts';
import withBooleanState from '../../hocs/with-boolean-state/with-boolean-state';
import {ActionCreator} from '../../reducer/offers/offers';
import {getSort} from '../../reducer/offers/selectors';

interface Props {
  currentSort: string;
  onChangeSort: () => void;
  booleanState: boolean;
  onToggle: () => void;
}

export const PlacesSorting: React.FC<Props> = ({currentSort, onChangeSort, booleanState, onToggle}: Props) => {
  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={onToggle}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type">
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
            onClick={onChangeSort.bind({}, sort)}
          >{sort}</li>
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  currentSort: getSort(state)
});

const mapDispatchToProps = {
  onChangeSort: (sort) => ActionCreator.changeSort(sort)
};

export default connect(mapStateToProps, mapDispatchToProps)(withBooleanState(PlacesSorting));
