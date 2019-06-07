import React from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = 'http://ctp-zip-api.herokuapp.com/city/BRONX';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      zipcodes: []
    }
  }

  handleSubmit =()=>{
    const data = axios.get(BASE_URL)
    .then(resp => {this.setState({zipcodes: resp.data})},
    (error)=> {console.log(error.messsage)});
    
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
