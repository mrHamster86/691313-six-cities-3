import * as React from 'react';
import {connect} from 'react-redux';
import {getCitiesList, getCity} from '../../reducer/offers/selectors';
import {ActionCreator} from '../../reducer/offers/offers';
import {City} from "../../types";

interface Props {
  selectCity: string;
  cities: City[];
  onChangeCity: (string) => void;
}

export const CitiesList: React.FC<Props> = ({selectCity, cities, onChangeCity}: Props) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.name} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${selectCity === city.name && `tabs__item--active`}`}
                onClick={onChangeCity.bind({}, city.name)}
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
  selectCity: getCity(state),
  cities: getCitiesList(state),
});

const mapDispatchToProps = {
  onChangeCity: (city) => ActionCreator.changeCity(city)
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
