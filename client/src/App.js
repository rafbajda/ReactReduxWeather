import React, { Component } from 'react';
import Main from "./components/main";


import StoreRef from "./store/store";

import {Provider} from "react-redux";



class App extends Component {
  render() {
    return (
      <Provider store={StoreRef}>
          <Main />        
      </Provider>
    );
  }
}

export default App;
