import React, { Component, ChangeEvent } from 'react';

interface ClassCounterState {
  count: number;
  name: string;
}

class ClassCounter extends Component<{}, ClassCounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    };
  }

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = (): void => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = (): void => {
    this.setState({ count: 0 });
  };

  handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ name: e.target.value });
  };

  componentDidMount(): void {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate(): void {
    document.title = `Count: ${this.state.count}`;
  }

  render(): JSX.Element {
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