import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/App.jsx';

const root = document.getElementById(`root`);

const placesCount = 312;

ReactDOM.render(<App placesCount={placesCount}/>, root);
