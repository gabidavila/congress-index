import React from 'react';
import { connect } from 'react-redux';
import * as StatesActions from '../../actions/statesActions';
import { bindActionCreators } from 'redux';
import { Dropdown, Form } from 'semantic-ui-react';

class StatesSelect extends React.Component {
  componentDidMount() {
    this.props.fetchStates();
  }

  handleChange = (event, data) => {
    console.log(event, data.value);
  };

  render() {
    let statesList = [{
      key: 'A',
      value: 'A',
      text: 'All States',
    }, ...this.props.states.map((state) => {
      return { key: state.state, value: state.state, text: state.state_full };
    })];

    return (
      <Form.Field>
        <label>State</label>
        <Dropdown placeholder='Select State' fluid search selection onChange={this.handleChange} options={statesList}/>
      </Form.Field>
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