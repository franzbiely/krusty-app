import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Inventory from './Inventory/Inventory';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Inventory} />
      </Router>
    );
  }
}

export default App;
