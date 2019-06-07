import React from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = 'http://ctp-zip-api.herokuapp.com/city/BRONX';

class App extends React.Component {

  handleSubmit =()=>{
    
  }


  render(){
    return (
      <div className="App">
        hello world

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );

  }
  
}

export default App;
