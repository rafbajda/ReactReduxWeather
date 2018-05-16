import React, { Component } from 'react';
import './Navbar.css';


export class Navbar extends Component {


  handleSubmit(e){
    if(this.refs.name.value === '') alert('Title is required');
    else {

      this.props.onSearch(this.refs.name.value);
    
        console.log(this.refs.name.value);

    }
    e.preventDefault();
}


  render() {
    return (
        <nav>
        <div className="nav-wrapper">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input-field">
              <input id="search" ref="name" type="search" placeholder = "Search city" required />
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
