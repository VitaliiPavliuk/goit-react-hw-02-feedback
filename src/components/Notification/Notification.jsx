import { Component } from 'react';

class Notification extends Component {
  render() {
    return (
      <div>
        <h1>Statistics</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Notification;
