/*

"StAuth10244: I Mark Kawucha, 000816619 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

*/

import './App.css';
import React, {Component} from 'react';
// Navbar
import './components/Navbar.css';
import {BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom';
// Importing components that will serve as the router pages
import {Home} from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Todo } from './components/Todo';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* Navbar that's app-wide
         (I wanted this to ultimately be its own component but with the routing happening on this component
          I wasn't sure how to setup the different Route components from within the Navbar since 
          they are technically rendered here within App, so I just hardcoded the nav inside here instead) */}
        <Router>
        <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link display-4" exact to="./" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link display-4" to="/todo" activeClassName="active">To-Do List</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link display-4" to="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link display-4" to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
                
                <div className="pageBody">
                  <Route exact path='/' component={Home}/>
                  <Route path='/todo' component={Todo}/>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact}/>
                </div>
                </Router>
      </div>
    );
  }
}

export default App;
