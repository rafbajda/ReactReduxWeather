import React, { Component } from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './FavouriteButton.css'

export class FavouriteButton extends Component {
  render() {
    return (
      <div>
          <a className="btn-floating btn-large waves-effect waves-light red pulse">
          <MaterialIcon icon="whatshot" color="#ffff" />
          </a>
      </div>
    )
  }
}

export default FavouriteButton
