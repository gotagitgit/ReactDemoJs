import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  render() {
    return (
      <div className="counter">
        <p>Hello {this.state.name || 'Anonymous'}!</p>
        <input 
          type="text" 
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <h3>Count: {this.state.count}</h3>
        <div className="buttons">
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;