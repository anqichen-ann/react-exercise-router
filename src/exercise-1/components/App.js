import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import About from './About/About';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className='list'>
          <ul>
            <li>
              <NavLink to='/' className='link' >Home</NavLink>
            </li>
            <li>
              <NavLink to='/my-profile' className='link'>My Profile</NavLink>
            </li>
            <li>
              <NavLink to='/about-us' className='link'>About Us</NavLink>
            </li>
            </ul></div>        
            <Route exact path='/' component={Home}  />
            <Route exact path='/my-profile' component={Profile}  />
            <Route exact path='/about-us' component={About}  />

        </Router>
      </div>
    );
  }
}

export default App;
