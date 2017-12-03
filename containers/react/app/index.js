import React from "react";
import ReactDOM from "react-dom";
import App from "./components/Intro.jsx";
import history from './history';

import {Router} from "react-router-dom";
// import style from '../../public/sass/screen.scss';

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
, document.getElementById('root'));
