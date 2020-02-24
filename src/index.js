import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';

const root = document.getElementById(`root`);

const placesCount = 312;
const places = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];
const titleClickHandler = () => {};

ReactDOM.render(<App
  placesCount={placesCount}
  places={places}
  titleClickHandler={titleClickHandler}
/>, root);
