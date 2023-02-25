import { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <div>
        <h1>Statistics</h1>
        <span>Good: {`${this.props.good}`}</span>
        <span>Neural: {`${this.props.neutral}`}</span>
        <span>Bad: {`${this.props.bad}`}</span>
        <span>Total: {this.props.total()}</span>
        <span>Positive feedback: {this.props.positivePercentage()}%</span>
      </div>
    );
  }
}

export default Statistics;
