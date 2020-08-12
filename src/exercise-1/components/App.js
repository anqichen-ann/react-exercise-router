import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import About from './About/About';
import Products from './Products/Products';

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
                <NavLink to='/products' className='link' >Products</NavLink>
              </li>
              <li>
                <NavLink to='/my-profile' className='link'>My Profile</NavLink>
              </li>
              <li>
                <NavLink to='/about-us' className='link'>About Us</NavLink>
              </li>
              </ul>
            </div>        
            <Switch>
            <Route exact path='/' component={Home}  />
            <Route path='/products' component={Products}  />
            <Redirect from="/goods" to="/products"/>
            <Route path='/my-profile' component={Profile}  />
            <Route path='/about-us' component={About}  />
            <Route component={Home}  />
            </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
