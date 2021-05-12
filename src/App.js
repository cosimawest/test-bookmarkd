import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar.js';

import Home from './pages/Home.js';
import Marketplace from './pages/Marketplace.js';
import YourBackpack from './pages/YourBackpack.js';
import Messages from './pages/Messages.js';
import Profile from './pages/Profile.js';
import Dashboard from './pages/Dashboard.js';
import NotFound from './pages/NotFound.js';

import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>

            <Route exact path="/main-home"     render={(props) => <Home {...props} />} />
            <Route exact path="/marketplace"    render={(props) => <Marketplace {...props} />} />
            <Route exact path="/your-backpack"    render={(props) => <YourBackpack {...props} />} />
            <Route exact path="/messages"    render={(props) => <Messages {...props} />} />
            <Route exact path="/profile"    render={(props) => <Profile {...props} />} />
            <Route exact path="/dashboard"    render={(props) => <Dashboard {...props} />} />
            <Route exact path="/">
              <Redirect to="/main-home" />
            </Route>
            <Route component={NotFound}/>

          </Switch>
        </BrowserRouter>

        {/* <NavBar/>
        <div className="spacer">&nspb;</div>
        <Home/> */}
        {/* <Footer/> */}
    </div>
  );
}

export default App;
