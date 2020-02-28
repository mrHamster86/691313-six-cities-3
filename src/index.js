import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';
import offers from './mocks/offers';

const root = document.getElementById(`root`);

ReactDOM.render(<App
  offers={offers}
/>, root);
