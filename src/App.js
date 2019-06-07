import React from 'react';
import axios from 'axios';
import './App.css';
import ZipList from './ZipList';

const BASE_URL = 'http://ctp-zip-api.herokuapp.com/city/BRONX';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      zipcodes: [],
      errorMessage: '',
      city: ''
    }
  }

  handleSubmit =()=>{
    const data = axios.get(BASE_URL)
    .then(resp => {this.setState({zipcodes: resp.data})},
    (error)=> {this.setState({errorMessage: error.message})});
  }

  handleChange =(e)=>{
    this.setState({city: e.target.value })
  }

  render(){
    return (
      <div className="App">
        <label>Enter city name: </label>
        <input type="text" onChange={this.handleChange}></input>

        <button onClick={this.handleSubmit}>Submit</button>

        <ZipList zipcodes={this.state.zipcodes}/>
      </div>
    );
  } 
}

export default App;
