import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
        <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" placeholder = "Search city" required />
              <label className="label-icon" for="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar
