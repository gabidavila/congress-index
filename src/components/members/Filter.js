import React from 'react';
import { connect } from 'react-redux';
import * as FilterActions from '../../actions/filterActions';
import { bindActionCreators } from 'redux';
import StatesSelect from '../interface/StatesSelect';

class Filter extends React.Component {
  componentDidMount() { 
    this.props.fetchStates();
  }

  handleChange = (value) => {
    console.log(value);
  };

  render() {
    return (
      <StatesSelect states={this.props.states} onChangeHandler={this.handleChange}/>
    );
  }

}

function mapStateToProps(state) {
  return {
    states: state.states.statesList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FilterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);