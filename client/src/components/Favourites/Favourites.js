import React, { Component } from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './Favourites.css'

export class Favourites extends Component {


  handleSubmit(e){
    if(e === '') alert('Title is required');
    else {

      this.props.onSearch(e);
    
        console.log(e);

    }
}


  render() {
    const list = this.props.favouritesObject.map(one =>{
        return(              
          <tr>
            <td>
            <div className = "valign-wrapper">            
              <a onClick={this.handleSubmit.bind(this, one)}>{one}</a>
              <a onClick={this.props.onDelete.bind(this, 777, one)}><MaterialIcon icon="close"/></a>
            </div>
            </td>

          </tr>       
        )
      })
    return (
        <div>
  {list}

</div>
    )
  }
}

export default Favourites
