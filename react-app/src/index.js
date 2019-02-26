import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'w3-css/w3.css';
import './css/style.css';
import './css/main.css';
import './css/colors.css';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
