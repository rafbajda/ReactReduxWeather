import React, { Component } from 'react'
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './WeatherInformation.css'

import FavouriteButton from '../FavouriteButton/FavouriteButton'


export class WeatherInformation extends Component {

   
      
  render() {
    return (
      <div className = "row">
        <div className = " col s6 offset-s3">
                <div  id = "mainCard" class="card">  
                    <div class = "row breakrow valign-wrapper">
                        <h4 class = "col s5 offset-s1"><MaterialIcon icon="dashboard"/> Dashboard</h4>
                        <div class = "col s2">
                            <FavouriteButton />
                        </div>
                    </div>
                        <div class = "row ">
                            <div className = "card col s3 offset-s2 pink lighten-3 center-align">
                                <h6> City: </h6>
                                <h5 class="LowerRow">{this.props.locationObject[0]}</h5>
                            </div> 
                            <div className = "card col s3 push-s2 pink lighten-3 center-align">
                                <h6>  Country: </h6>
                                <h5 class="LowerRow">{this.props.locationObject[2]}</h5>
                            </div> 
                        </div>
                        <div class = "row ">
                            <div className = "card col s3 offset-s2 pink lighten-3 center-align">
                                <h6>  Time-zone: </h6>
                                <h5 class="LowerRow">{this.props.locationObject[5]}</h5>
                            </div> 
                            <div className = "card col s3 push-s2 pink lighten-3 center-align">
                                <h6> Local time: </h6>
                                <h5 class="LowerRow">{this.props.locationObject[7]}</h5>
                            </div> 
                        </div>
                        <div class = "row breakrow">
                            <h4 class = "col s11 offset-s1"><MaterialIcon icon="wb_cloudy"/> Current Conditions</h4>
                         </div>
                         <div class = "row ">
                            <div className = "card col s3 offset-s2 pink lighten-3 center-align">
                                <h6>  Condition </h6>
                                <h5 class="LowerRow">{this.props.conditionsObject[0]}</h5>
                            </div> 
                            <div className = "card col s3 push-s2 pink lighten-3 center-align">
                                <h5 class="LowerRow"><img id = "condition-image" src={this.props.conditionsObject[1]} alt="current weather condition icon" /></h5>
                            </div> 
                        </div>
                        <div class = "row breakrow">
                            <h4 class = "col s11 offset-s1"><MaterialIcon icon="wb_incandescent"/> Other Conditions</h4>
                         </div>
                         <div class = "row ">
                            <div className = "card col s3 offset-s2 pink lighten-3 center-align">
                                <h6>  Clouds </h6>
                                <h5 class="LowerRow">{this.props.apiObject[14]}</h5>
                            </div> 
                            <div className = "card col s3 push-s2 pink lighten-3 center-align">
                                <h6>  Feels like (Celcius) </h6>
                                <h5 class="LowerRow">{this.props.apiObject[15]}</h5>
                            </div> 
                        </div>
                        <div class = "row ">
                            <div className = "card col s3 offset-s2 pink lighten-3 center-align">
                                <h6>  Feels like (Fahrenheit) </h6>
                                <h5 class="LowerRow">{this.props.apiObject[16]}</h5>
                            </div> 
                            <div className = "card col s3 push-s2 pink lighten-3 center-align">
                                <h6>  Humidity</h6>
                                <h5 class="LowerRow">{this.props.apiObject[13]}</h5>                           
                            </div> 
                        </div>                   
                </div>

        </div>
      </div>
    )
  }
}

export default WeatherInformation
