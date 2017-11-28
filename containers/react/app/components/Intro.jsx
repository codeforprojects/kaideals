import React, { Component } from 'react'

import Header from './Header.jsx';
import DealsContainer from './deals/deal_container.jsx';
import Footer from './Footer.jsx';


import ContributorContainer from './coders/contributor_container.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <DealsContainer/>
        {/*<ContributorContainer />*/}
        <Footer />

      </div>
    );
  }
}

export default App;
