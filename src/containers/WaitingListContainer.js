import React, { Component } from 'react';
import WaitingList from 'components/WaitingList';
import { connect } from 'react-redux';
import * as waitingActions from 'store/modules/waiting';
import { bindActionCreators } from 'redux';

class WaitingListContainer extends Component {
    handleChange=(e)=>{
        this.props.WaitingActions.changeInput(e.target.value);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const { input } = this.props;
        this.props.WaitingActions.create(input);
        this.props.WaitingActions.changeInput('');
    }
    handleEnter=(id)=>{
        this.props.WaitingActions.enter(id);
    }
    handleLeave=(id)=>{
        this.props.WaitingActions.leave(id);
    }

    render() {
        return (
            <WaitingList
                input={this.props.input}
                waitingList={this.props.list}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onEnter={this.handleEnter}
                onLeave={this.handleLeave}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    input: state.waiting.input,
    list: state.waiting.list,
});
const mapDispatchToProps = (dispatch) => ({
    WaitingActions: bindActionCreators(waitingActions, dispatch)  //dispatch(waitingActions.WaitingActions())
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(WaitingListContainer);