import React, { Component } from 'react';
import './Navbar.css';
import {Autocomplete,Collection, CollectionItem} from 'react-materialize'


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

  showClues({target}) {
    
    if (target.value !== '') 
      this.setState({
        showResults : true
      },() => this.props.onClue(target.value));
    
  }

  clickHandler(value) {
    console.log(value);
    if (value !== '') 
      this.props.onSearch(value);
      console.log('tutaj patrz: ', value)
      this.setState({
        showResults : false
      });
    
  }

  switchHandler(switch_state){
    this.props.onSwitch(switch_state);
  }


  render() {
    let listObj = {};
    this.props.cluesObject.map((one, i) => {
      let elem = one;
      listObj[one] = null;
    })
    return (      
      <div>
        <nav>
          <div className="nav-wrapper">
            <form onSubmit={this.handleSubmit.bind(this)} autocomplete="off">
              <div className="input-field">
                <div class = "row">
                  <Autocomplete
                  onChange={this.showClues.bind(this)}
                  onAutocomplete={this.clickHandler.bind(this)}
                  id="search"
                  label='Search city'
                  data={listObj}
                />
                </div>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
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
      
      </div>
    )
  }
}

export default Navbar
