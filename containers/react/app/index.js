import React from "react";
import ReactDOM from "react-dom";
import App from "./components/Intro.jsx";
import Registration from "./components/deals/registration"

import {BrowserRouter, Route, Switch} from "react-router-dom";
// import style from '../../public/sass/screen.scss';

ReactDOM.render(<BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/registration" component={Registration}/>
            </Switch>
        </div>
    </BrowserRouter>

    , document.getElementById('root'));
