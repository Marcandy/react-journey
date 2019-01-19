import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './Switch.js'

class App extends Component {

  state = {
    on: false,
  }

  static defaultProps = {
    onToggle: () => { alert('boom')}
  }
  render() {
    const { on } = this.state;

    const switchToggle = (on) => {
      this.setState( ({on}) => ({ on: !on }),
    () => {
      this.props.onToggle(this.state.on)
    })
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Toggle</h1>
        </header>
        <div className="App-intro">
          <br/>
          <Switch
            on={on}
            onClick={switchToggle}/>
        </div>
      </div>
    );
  }
}

export default App;
