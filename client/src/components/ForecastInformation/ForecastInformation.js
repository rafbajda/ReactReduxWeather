import React, { Component } from 'react';
import './ForecastInformation.css';

export class ForecastInformation extends Component {  

  render() {

   const list = this.props.forecastObject.map((one, key) => {
      return (        
        <div key = {key} class={!key?"col s2 offset-s1":"col s2"}>
          <div class="card">
            <div class="card-image center-align">
              <img id = "condition-image" src={one.day.condition.icon} alt="current weather condition icon"/>
            </div>
         
            <div class="card-content left-align">
               <p><span className ="displayLabel">wschod:</span> {one.astro.sunrise}</p> 
               <p><span className ="displayLabel">zachod:</span> {one.astro.sunset}</p> 
               <p><span className ="displayLabel">maxC:</span> {one.day.maxtemp_c}</p> 
               <p><span className ="displayLabel">minC:</span> {one.day.mintemp_c}</p> 
               <p><span className ="displayLabel">max wiatr:</span> {one.day.maxwind_kph}</p> 
               <p><span className ="displayLabel">opady [mm]:</span> {one.day.totalprecip_mm}</p>        
            </div>
            <div id = "dateRow" className="card-action left-align">
              {one.date}
            </div>
          </div>
        </div>
      )
    })
    return (
        <div>
          {list}
        </div>
    )
  }
}

export default ForecastInformation
