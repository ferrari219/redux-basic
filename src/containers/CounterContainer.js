import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { number, color } = this.props;
    return (
      <Counter
        value={number}
        color={color}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = state => ({
  number: state.counter.number,
  color: state.counter.color
});
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment()),
  decrement: () => dispatch(counterActions.decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
