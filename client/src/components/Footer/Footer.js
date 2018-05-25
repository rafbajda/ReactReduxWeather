import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Projekt ReactJS</h5>
              <p class="grey-text text-lighten-4">Aplikacje internetowe oparte o komponenty</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Autorzy:</h5>
              <ul>
                <li class="grey-text text-lighten-3">Rafał Bajda</li>
                <li class="grey-text text-lighten-3">Kamil Szczerbiński</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container center-align">
          © 2018 Rafał&Kamil Copyright
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
