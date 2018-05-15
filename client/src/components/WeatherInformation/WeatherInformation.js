import React, { Component } from 'react'
import MaterialIcon, {colorPallet} from 'material-icons-react';


export class WeatherInformation extends Component {

   
      
  render() {
    return (
      <div className = "row">
        <div className = "col s6 offset-s2">
                <div class="card">                    
                    <div className = "row ">
                        <div className = "col s4">
                        <span><MaterialIcon icon="location_city"/></span>  <p>  City: </p>
                          <p>{this.props.WeatherObject[0]}</p>
                        </div>                         
                    </div> 
                    <div className = "row">
                        <div className = "col s4">
                            <p>Country:</p>
                        </div>
                    </div>   
                    <div className = "row">
                        <div className = "col s4">
                            <p>Time zone:</p>
                        </div>
                    </div> 
                    <div className = "row">
                        <div className = "col s4">
                            <p>Local time:</p>
                        </div>                        
                    </div>
                    <div className = "row">
                        <div className = "col s4">
                            <p>Current time:</p>
                        </div>                        
                    </div>  
                                  
                     <div className = "row">
                        <div className = "col s4">
                            <p>Other condtitions:</p>
                        </div>                        
                    </div>  
                    <div className = "row">
                        <div className = "col s4">
                            <p>Clouds:</p>
                        </div>                        
                    </div> 
                    <div className = "row">
                        <div className = "col s4">
                            <p>Feels like (C):</p>
                        </div>                        
                    </div> 
                    <div className = "row">
                        <div className = "col s4">
                            <p>Feels like (F):</p>
                        </div>                        
                    </div>
                    <div className = "row">
                        <div className = "col s4">
                            <p>Humidity:</p>
                        </div>                        
                    </div>
                </div>

        </div>
      </div>
    )
  }
}

export default WeatherInformation
