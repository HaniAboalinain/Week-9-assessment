import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

import input from "./UserInput";
import output from "./UserOutput";



class App extends Component {
  render(){

  var state = {
    names:[{name : "Max" , message : "any thing" }]


}


  return (

    <div >
     
      <input />


      <output name={this.state.names}/>
      <output name={this.state.names}/>
      <output name="Max" />

      
    </div>


  );
}
}

export default App;
