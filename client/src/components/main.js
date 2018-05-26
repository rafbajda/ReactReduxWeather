import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//import the action
import { fetchAPIResponse } from "../actions/fetch_api_data";
import { fetchFavourites } from "../actions/fetch_api_favourites";
import { addFavourites } from "../actions/add_api_favourites";
import { deleteFavourites } from "../actions/delete_api_favourites";
import { fetchAPIClue } from "../actions/fetch_api_clue";
import { fetchAPIForecast } from "../actions/fetch_api_forecast"


import Navbar from './Navbar/Navbar'
import WeatherInformation from './WeatherInformation/WeatherInformation'
import ForecastInformation from './ForecastInformation/ForecastInformation'

import Footer from './Footer/Footer'
import { Button } from 'react-materialize';

class Main extends Component {

  //innerState 
  constructor() {
    super();
    this.state = {
      value: "Paris",
      sercz: "",
      showResults : true,
      isFavourite: false
    }
  }

  componentWillMount = () => {

    this.props.FetchAPIResponse("Paris");
    this.props.FetchAPIForecast("Paris");
    this.props.FetchFavourites();

  }

  search = () => {
    this.props.FetchAPIResponse(this.state.value);
    this.props.FetchAPIForecast(this.state.value);
  }

  changeHandler = (e) => {
    let value = e.target.value;
    this.setState({
      value: value
    });
    console.log(this.state.value);

  }

  handleSearch = (fav) => {
    this.setState({
      value: fav
    }, () => { this.search() });


  }

  handleSubmit = (ide, nejm) => {
    console.log("HANDLE" + ide + " " + nejm);
    { this.props.AddFavourites(ide, nejm) }

  }

  handleDelete = (ide, nejm) => {
    console.log("DELETE" + ide + " " + nejm);
    { this.props.DeleteFavourites(ide, nejm) }
    window.Materialize.toast('City removed from favourites!', 2000)
   
  }


  handleSubmit2 = (temp) => {
    this.setState({
      sercz: temp
    }, () => {
      this.props.FetchAPIClue(this.state.sercz);
    });

  }

  switchForecast_Weather = (switch_state) => {
    if(switch_state){
    this.setState({
      showResults : false
    });
  }
  else this.setState({
    showResults : true})
  }
  render() {


    return (
      <div>
        <Navbar cluesObject={this.props.apiClues} 
        onSearch={this.handleSearch.bind(this)} 
        onClue={this.handleSubmit2.bind(this)} 
        onSwitch={this.switchForecast_Weather.bind(this)}
        />

        {this.state.showResults ? 
        <div>        
          <WeatherInformation locationObject={this.props.apiLocation}
          conditionsObject={this.props.apiConditions}
          apiObject={this.props.apiResponse}
          favouritesObject={this.props.apiFavourites}
          onSearch={this.handleSearch.bind(this)}
          onDelete={this.handleDelete.bind(this)}
          onAdd={this.handleSubmit.bind(this)}
          isFavourite={this.state.isFavourite}
          />
          </div>
         : 
         <div className = "row">
          <div className = "col s12">
            <h2 id = "forecastMsg" className = "center-align"> Forecast for <span className = "cityLabel">{this.state.value}</span></h2>
          </div>
            <div className = "row">
              <ForecastInformation  forecastObject={this.props.apiForecast}/>
            </div>
         </div>
         }
        <Footer />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    apiResponse: state.FetchWeatherReducer.weatherData,
    apiLocation: state.FetchWeatherLocation.location,
    apiConditions: state.FetchCurrentConditions.conditions,
    apiFavourites: state.FetchWeatherFavourites.favourites,
    apiClues: state.FetchWeatherClues.clues,
    apiForecast: state.FetchWeatherForecast.forecast,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ 
    FetchAPIResponse: fetchAPIResponse, 
    FetchAPIForecast: fetchAPIForecast, 
    FetchFavourites: fetchFavourites, 
    AddFavourites: addFavourites, 
    DeleteFavourites: deleteFavourites, 
    FetchAPIClue: fetchAPIClue }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);

