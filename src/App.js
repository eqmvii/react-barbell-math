import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let Weight = (props) => (<h1 class="weight">{props.weight}</h1>);

let Plates = (props) => (<h3>{props.name} plates: {props.plates}</h3>);

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
    if (isNaN(initialWeight) || initialWeight < 45) {
      this.setState({weight: "Please enter a valid weight over 45lbs"});
      return;
    }

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
          <Plates name="45 lb" plates={this.state.fortyfives} />
          <Plates name="25 lb" plates={this.state.twentyfives} />
          <Plates name="10 lb" plates={this.state.tens} />
          <Plates name="5 lb" plates={this.state.fives} />
          <Plates name="extra" plates={this.state.extra} />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
