import React, { Component } from 'react';
import './App.css';
import countryList from './countryList';
 
class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        countryCode: ''
      }
      this.updateState= this.updateState.bind(this);

    }
    updateState(e){
      this.setState({countryCode:e.target.value})
    }
  render() {

    return (
      <div className="App">
       <select onChange={this.updateState} >
        <option value="">Country...</option>
       {countryList.map((c)=>
        <option key={c.id} value= {c.code} >{c.country }</option>
        )}
       </select>
       <p className="code">country code: {this.state.countryCode}</p>
      </div>
    );
  }
}

export default App;
