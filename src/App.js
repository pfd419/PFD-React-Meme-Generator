import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import GetImage from './pages/GetImage';
import ShowImage from './pages/ShowImage';

import './css/App.css';

export const mapStateToProps = state => ({ ...state });

const App = props => {
  return (
    <HashRouter>
      <div className="app">
        <div className="banner">Meme Generator</div>
        <div>
          <Route exact path="/" component={GetImage} />
          <Route path="/show" component={ShowImage} />
        </div>
      </div>
    </HashRouter>
  );
};

export default connect(mapStateToProps)(App);