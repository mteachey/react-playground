import React from 'react';


class Counter extends React.Component {
    static defaultProps = {
        step:1
      };
    constructor(props) {
        console.log('props in Counter constructor', props)
        super(props)
        this.state = { count: 0 }
    }
    handleButtonClick = () => {
        this.setState({ count: this.state.count + this.props.step })
    }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>
          Add {this.props.step}
        </button>
      </div>
    )
  }
}

export default Counter;