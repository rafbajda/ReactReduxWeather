import React, { Component } from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';


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
              {one}
              <MaterialIcon icon="close"/>
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
