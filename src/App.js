import React from 'react';
import axios from 'axios';
import './App.css';
import ZipList from './ZipList';

const BASE_URL = 'http://ctp-zip-api.herokuapp.com/city/';

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
    const url = BASE_URL + this.state.city.toUpperCase();
    const data = axios.get(url)
    .then(resp => {this.setState({zipcodes: resp.data})},
    (error)=> {this.setState({errorMessage: error.message})});
  }

  handleChange =(e)=>{
    this.setState({city: e.target.value })
  }

  render(){
    if(this.state.errorMessage) return <h1>{this.state.errorMessage}</h1>
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
