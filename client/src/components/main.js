import React, { Component } from 'react';

//import the connect and bindActionsCreators functions
//this is important
//in order to connect the component to the state in Redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//import the action
import {fetchAPIResponse} from "../actions/fetch_api_data";
import {fetchFavourites} from "../actions/fetch_api_favourites";


import Navbar from './Navbar/Navbar'
import WeatherInformation from './WeatherInformation/WeatherInformation'
import Footer from './Footer/Footer'

class Main extends Component {

  //innerState 
  constructor(){
    super();
    this.state = {
      value: ""
    }
  }
 
  //call the action
  componentWillMount= () =>{
    //before mounting
    //make the action
    //remember we passed an argument
     this.props.FetchAPIResponse("Paris");
     this.props.FetchFavourites();

  }
 

  //this is the function to search for the city added
  search = () =>{
    //in this case I am using state just for this component
    //doesnt need to be in the general state
    this.props.FetchAPIResponse(this.state.value);
  }

  changeHandler = (e) =>{
   //get the value from the input
    let value = e.target.value;
   //store the value in the state property
    this.setState({
      value : value
    });
    console.log(this.state.value);
    
  }

  handleSearch = (fav) =>{
    //in this case I am using state just for this component
    //doesnt need to be in the general state
    this.setState({
      value : fav
    },()=>{this.search()});
  

  }

  render() {


    return (
      <div>              
       
        
        <Navbar onSearch={this.handleSearch.bind(this)}/>
        <WeatherInformation locationObject = {this.props.apiLocation} 
        conditionsObject = {this.props.apiConditions} 
        apiObject = {this.props.apiResponse}
        favouritesObject = {this.props.apiFavourites} 
        onSearch = {this.handleSearch.bind(this)}
        />
        <Footer />      
      </div>
    );
  }
}


function mapStateToProps(state){
//allows us to get the data from the store
//using props
//the value here is a little tricky
//state.ReducerName.reducerProperty
  return{
    apiResponse: state.FetchWeatherReducer.weatherData,
    apiLocation : state.FetchWeatherLocation.location,
    apiConditions: state.FetchCurrentConditions.conditions,
    apiFavourites : state.FetchWeatherFavourites.favourites

  }
}

//remember that to call this property using "props.FetchAPIResponse"
function matchDispatchToProps(dispatch){
  //bind the action to be executed
  return bindActionCreators({FetchAPIResponse:fetchAPIResponse,FetchFavourites:fetchFavourites}, dispatch);
}

//we export the component using the connect from Redux
//we pass the functions that connect the props and the actions
export default connect(mapStateToProps, matchDispatchToProps)(Main);//the name of the component

// I think that is all 
