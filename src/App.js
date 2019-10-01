import React, { useState, useContext } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import { UserContext, user } from './contexts/UserContext';
import { ThemeContext, themes } from './contexts/ThemeContext';

import ProfilePage from './pages/profile-page';
import InputPage from './pages/input-page';

import './App.css';

let defaultUser = user;
let defaultTheme = themes.light;

export default function App() {
  const [signedInUser, setSignedInUser] = useState({
    user: defaultUser,
    setUser: (value) => {
      setSignedInUser({
        user: value,
        setUser: signedInUser.setUser
      })
    }
  });

  const [theme, setTheme] = useState({
    selectedTheme: defaultTheme,
    setSelectedTheme: (value) => {
      setTheme({
        selectedTheme: value,
        setSelectedTheme: theme.setSelectedTheme
      })
    }
  });

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Router>
          <Layout />
        </Router>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout() {
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
  )
}

function Toolbar() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Display Data</Link>
        </li>
        <li>
          <Link to="/input" style={selectedTheme}>Enter Data</Link>
        </li>
      </ul>
    </nav>
  )
}

// A component may consume multiple contexts
function Content() {
  return (
    <div style={{ paddingLeft: "25px" }}>
      <Switch>
        <Route exact path="/" component={ProfilePage} />
        <Route path="/input" component={InputPage} />
      </Switch>
    </div>
  );
}