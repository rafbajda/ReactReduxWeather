import React, { Component } from 'react';
import './Navbar.css';


export class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showResults : true,
    }
  }

  handleSubmit(e) {
    if (this.refs.name.value === '') alert('Title is required');
    else {

      this.props.onSearch(this.refs.name.value);

    }
    e.preventDefault();
  }

  showClues() {
    if (this.refs.name.value === '') alert('Title is required');
    else {
      this.setState({
        showResults : true
      },() => this.props.onClue(this.refs.name.value));

    }
  }

  clickHandler(temp) {
    if (this.refs.name.value === '') alert('Title is required');
    else {

      this.props.onSearch(temp);
      this.setState({
        showResults : false
      });

    }
  }

  switchHandler(switch_state){
    this.props.onSwitch(switch_state);
  }


  render() {

    const list = this.props.cluesObject.map(one => {
      return (
        <ul>
          <li>   <a onClick={this.clickHandler.bind(this, one)}>{one}</a></li>
        </ul>
      )
    })

    return (      
      <div>
        <nav>
          <div className="nav-wrapper">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="input-field">
                <input onChange={this.showClues.bind(this)} id="search" ref="name" type="search" placeholder="Search city" required />
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
            
            
        </nav>
        <div id = "tableRow" class="row">
              <ul class="tabs tabs-transparent">
                <li class="tab">
                  <a class="active" onClick={() => this.switchHandler(0)}>
                    Current weather
                  </a>
                </li>
                <li class="tab">
                  <a onClick={() => this.switchHandler(1)}>
                    Forecast
                  </a>
                </li>               
              </ul>
            </div>
        { this.state.showResults ? <div>{list}</div> : null }
      </div>
    )
  }
}

export default Navbar
