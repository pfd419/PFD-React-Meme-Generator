import React, { useState, useContext, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createStore } from 'redux';

import { UserContext, user } from './contexts/UserContext';
import { ThemeContext, themes } from './contexts/ThemeContext';

import ProfilePage from './pages/profile-page';
import InputPage from './pages/input-page';

import './css/App.css';

let defaultUser = user;
let defaultTheme = themes.light;



export default function App() {
  const [signedInUser, setSignedInUser] = useState({
    user: defaultUser,
    setUser: (value) => {
      setSignedInUser({
        user: value,
        setUser: signedInUser.setUser
      });
    }
  });

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
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    function setApiStatus(data) {
      setApiData(data);
      setLoading(Object.entries(data).length === 0);
    }

    if (!Object.entries(apiData).length) {
      setApiStatus(apiData);
      fetch("https://swapi.co/api/people/")
        .then(response => response.json())
        .then(data => setApiStatus(data))
    }
  });

  return loading ? (<div>Loading...</div>) : (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Router>
          <Layout apiData={apiData} />
        </Router>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout(props) {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <div style={selectedTheme}>
      <Header />
      <Toolbar />
      <Content apiData={props.apiData} />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Paul's Test App</h1>
    </header>
  )
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
  )
}

// A component may consume multiple contexts
function Content(props) {
  const { apiData } = props;
  return (
    <div style={{ paddingLeft: "25px" }}>
      <Switch>
        <Route exact path="/" render={props => <ProfilePage {...props} apiData={apiData} />} />
        <Route path="/input" render={props => <InputPage {...props} apiData={apiData} />} />
      </Switch>
    </div>
  );
}