import React, { Component } from 'react'
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './WeatherInformation.css'
import {SideNav, Button, SideNavItem, Table, Toast} from 'react-materialize'

import Favourites from '../Favourites/Favourites'

export class WeatherInformation extends Component {  
  
    
      addFavouriteCity(){
             if(this.props.favouritesObject.includes(this.props.locationObject[0])){
              console.log('zawiera');
              window.Materialize.toast('City is already favourite!', 2000)
          } else {
              console.log('nie zawiera')
              {this.props.onAdd(123,this.props.locationObject[0])} //CO PODAĆ ZA ID???????
              window.Materialize.toast('City added to favourites!', 2000)
        }
      }
     
  render() {
    return (
      <div className = "row">
      <div className = "col s3">
        
      </div>

      
        <div className = "col s8 offset-s2">
                <div  id = "mainCard" class="card">  
                    <div className = "row breakrow valign-wrapper">
                        <h4 className = "col s5 offset-s1"><MaterialIcon icon="dashboard"/> Dashboard</h4>
                        <div className = "col s2">
                                    <SideNav
                            trigger={ <Button floating large className='red' waves='light' icon='whatshot' />}
                            options={{
                            closeOnClick: false,
                            menuWidth: 275,
                                        
                            }}
                            >
                        <SideNavItem userView
                        user={{
                            background: './BigCityLife.jpeg',
                            name: 'Favourite Cities',
                        }}
                        />

                                <Table striped = {true}>
                                <thead>
                                    <tr>
                                    <th data-field="id" className = "valign-wrapper">
                                    <MaterialIcon icon="location_city"/>
                                    City</th>              
                                    </tr>
                                </thead>
                                <tbody >
                                <Favourites favouritesObject={this.props.favouritesObject} 
                            onSearch={this.props.onSearch.bind(this)}
                            onDelete={this.props.onDelete.bind(this)}/> 
                                </tbody>
                            </Table>
                    </SideNav>
                        </div>
                    </div>
                        <div className = "row">
                            <div className = "card col s4 offset-s1 pink lighten-3 center-align">
                                <h6> 
                                    <a id = "AddFavouriteButton" onClick = {this.addFavouriteCity.bind(this)} >
                                        <MaterialIcon icon="favorite" />                                    
                                    </a> City: </h6>
                                <h5 class="LowerRow">{this.props.locationObject[0]}</h5>
                            </div> 
                            <div className = "card col s4 offset-s2 pink lighten-3 center-align">
                                <h6>  Country: </h6>
                                <h5 className="LowerRow">{this.props.locationObject[2]}</h5>
                            </div> 
                        </div>
                        <div className = "row ">
                            <div className = "card col s4 offset-s1 pink lighten-3 center-align">
                                <h6>  Time-zone: </h6>
                                <h5 className="LowerRow">{this.props.locationObject[5]}</h5>
                            </div> 
                             <div className = "card col s4 offset-s2 pink lighten-3 center-align">
                                <h6> Local time: </h6>
                                <h5 className="LowerRow">{this.props.locationObject[7]}</h5>
                            </div> 
                        </div>
                        <div className = "row breakrow">
                            <h4 className = "col s11 offset-s1"><MaterialIcon icon="wb_cloudy"/> Current Conditions</h4>
                         </div>
                         <div className = "row ">
                            <div className = "card col s4 offset-s1 pink lighten-3 center-align">
                                <h6>  Condition </h6>
                                <h5 className="LowerRow">{this.props.conditionsObject[0]}</h5>
                            </div> 
                             <div className = "card col s4 offset-s2 pink lighten-3 center-align">
                                <h5 class="LowerRow"><img id = "condition-image" src={this.props.conditionsObject[1]} alt="current weather condition icon" /></h5>
                            </div> 
                        </div>
                        <div className = "row breakrow">
                            <h4 className = "col s11 offset-s1"><MaterialIcon icon="wb_incandescent"/> Other Conditions</h4>
                         </div>
                         <div className = "row ">
                            <div className = "card col s4 offset-s1 pink lighten-3 center-align">
                                <h6>  Clouds </h6>
                                <h5 className="LowerRow">{this.props.apiObject[14]}</h5>
                            </div> 
                             <div className = "card col s4 offset-s2 pink lighten-3 center-align">
                                <h6>  Feels like (Celcius) </h6>
                                <h5 className="LowerRow">{this.props.apiObject[15]}</h5>
                            </div> 
                        </div>
                        <div className = "row ">
                            <div className = "card col s4 offset-s1 pink lighten-3 center-align">
                                <h6>  Feels like (Fahrenheit) </h6>
                                <h5 className="LowerRow">{this.props.apiObject[16]}</h5>
                            </div> 
                             <div className = "card col s4 offset-s2 pink lighten-3 center-align">
                                <h6>  Humidity</h6>
                                <h5 className="LowerRow">{this.props.apiObject[13]}</h5>                           
                            </div> 
                        </div>                   
                </div>

        </div>
      </div>
    )
  }
}

export default WeatherInformation
