import React from 'react';
import { connect } from 'react-redux';
import * as StatesActions from '../../actions/statesActions';
import { bindActionCreators } from 'redux';

class StatesSelect extends React.Component {
  componentDidMount() {
    this.props.fetchStates();
  }

  render() {
    return (
      <div>
        States
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    states: state.states.statesList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(StatesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StatesSelect);