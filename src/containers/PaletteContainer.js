import React, { Component } from 'react';
import Palette from 'components/Palette';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';

class PaletteContainer extends Component {
  handleSelect = color => {
    // const { changeColor } = this.props;
    console.log(this.props.changeColor);
    this.props.changeColor(color);
  }
  render() {
    const { color } = this.props;
    return (
      <Palette onSelect={this.handleSelect} selected={color}/>
    );
  }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  color: state.counter.color,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(counterActions.changeColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer);
