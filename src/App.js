import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let Weight = (props) => (<h1>{props.weight}</h1>);

class App extends Component {
  state = {
    weight: "",
    fortyfives: "",
    twentyfives: "",
    tens: "",
    fives: "",
    extra: "",
  };

  handleInputChange = event => {
    const initialWeight = parseInt(event.target.value);
    console.log(initialWeight);

    let processedWeight = initialWeight - 45; // 45 lb bar
    let fortyfives = 0;
    let twentyfives = 0;
    let tens = 0;
    let fives = 0;
    let extra = 0;

    while (processedWeight > 0) {
      if (processedWeight >= 90) {
        processedWeight -= 90;
        fortyfives += 1;
      } else if (processedWeight >= 50) {
        processedWeight -= 50;
        twentyfives += 1;
      } else if (processedWeight >= 20) {
        processedWeight -= 20;
        tens += 1;
      } else if (processedWeight >= 10) {
        processedWeight -= 10;
        fives +=1;
      } else {
        extra = processedWeight / 2;
        processedWeight = 0;
      }
    }

    this.setState({
      weight: initialWeight,
      fortyfives: fortyfives,
      twentyfives: twentyfives,
      tens: tens,
      fives: fives,
      extra: extra
    })

    // General version:

    // const { name, value } = event.target;
    // this.setState({
    //   [name]: value
    // });
  };

  render() {
    return (
      <div className="App">
        <Weight weight={this.state.weight}/>
        <header className="App-header">
          <input
            value={this.state.title}
            onChange={this.handleInputChange}
            name="weight"
            placeholder="Total Weight (lbs)"
          />
          <h3>45 lb plates: {this.state.fortyfives} </h3>
          <h3>25 lb plates: {this.state.twentyfives} </h3>
          <h3>10 lb plates: {this.state.tens} </h3>
          <h3>5 lb plates: {this.state.fives} </h3>
          <h3>Extra weight: {this.state.extra} </h3>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
