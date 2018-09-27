import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';

import Work from './Components/Work'
import Helper from './Components/Helper'
import Alerts from './Components/Alerts'

var data = {};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }
  componentDidMount(){
    function getURLParameter(name){
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }
    this.setState({mode: getURLParameter('mode')})
    this.fetchData()
  }
  fetchData = () => {
    fetch('https://ethgasstation.info/json/ethgasAPI.json',{
      method: "GET"
    })
    .then((response) => response.json())
    .then((response) => {
      response.standard = +(response.average / 10).toFixed(1);
      response.safeLow = +(response.safeLow / 10).toFixed(1);
      response.fast = +(response.fast / 10).toFixed(1);
      this.setState({data: response});
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.mode=='work'&&<Work data={this.state.data} />}
        {this.state.mode=='helper'&&<Helper data={this.state.data} />}
        {this.state.mode=='alerts'&&<Alerts data={this.state.data} />}
      </div>
    );
  }
}

export default App;
