import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.options.map((key, i) => (
          <button key={i} name={key} onClick={this.props.onLeaveFeedback}>
            {key}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
