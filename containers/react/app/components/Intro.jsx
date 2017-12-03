import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header.jsx';
import DealsContainer from './deals/deal_container.jsx';
import Register from './deals/register.jsx';
import Footer from './Footer.jsx';


import ContributorContainer from './coders/contributor_container.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={DealsContainer} />
          <Route path="/register" component={Register} />
          <Route path="/contributors" component={ContributorContainer} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
