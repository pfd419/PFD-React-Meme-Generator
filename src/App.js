import React, { useState, useContext, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { ThemeContext, themes } from './contexts/ThemeContext';

import ProfilePage from './pages/profile-page';
import InputPage from './pages/input-page';

import './css/App.css';

let defaultTheme = themes.light;

const mapStateToProps = state => ({
  user: state.user,
  apiData: state.apiData
});

function App(props) {
  const [theme, setTheme] = useState({
    selectedTheme: defaultTheme,
    setSelectedTheme: (value) => {
      setTheme({
        selectedTheme: value,
        setSelectedTheme: theme.setSelectedTheme
      });
    }
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    function setApiStatus(data) {
      props.dispatch({ type: 'SETAPIDATA', apiName: 'characters', data: data.results });
      setLoading(Object.entries(data).length === 0);
    }

    if (!Object.entries(props.apiData).length) {
      setApiStatus(props.apiData);
      fetch("https://swapi.co/api/people/")
        .then(response => response.json())
        .then(data => setApiStatus(data))
    }
  });

  return loading ? (<div>Loading...</div>) : (
    <ThemeContext.Provider value={theme}>
      <Router>
        <Layout />
      </Router>
    </ThemeContext.Provider>
  );
}

function Layout(props) {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <div style={selectedTheme}>
      <Header />
      <Toolbar />
      <Content />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Paul's Test App</h1>
    </header>
  );
}

function Toolbar() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" style={selectedTheme}>Display Data</Link>
        </li>
        <li>
          <Link to="/input" style={selectedTheme}>Enter Data</Link>
        </li>
      </ul>
    </nav>
  );
}

// A component may consume multiple contexts
function Content(props) {
  return (
    <div style={{ paddingLeft: "25px" }}>
      <Switch>
        <Route exact path="/" component={ProfilePage} />
        <Route path="/input" component={InputPage} />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps)(App);