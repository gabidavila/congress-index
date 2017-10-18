import React from 'react';
import { connect } from 'react-redux';
import * as FilterActions from '../../actions/filterActions';
import { fetchMembers } from '../../actions/membersActions';
import { initialState } from '../../helpers/filter';
import { bindActionCreators } from 'redux';
import { Form, Button } from 'semantic-ui-react';
import StatesSelect from '../interface/StatesSelect';
import PartySelect from '../interface/PartySelect';
import CongressSelect from '../interface/CongressSelect';
import NameSearch from './NameSearch';

class MemberFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.filters
    };
  }

  componentDidMount() {
    this.props.fetchStates();
  }

  handleReset = () => {
    this.props.resetFilter();
    this.props.onChangeHandle({});
    this.setState(initialState());
  };

  handleChange = (key, value) => {
    const filter = { [key]: value };

    this.setState({ ...filter }, () => {
      this.props.addFilter(filter);
      if (key === 'name' && [1, 2].includes(value.length)) {
        return;
      }
      this.props.onChangeHandle(this.state);
    });
  };

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Congress</label>
          <CongressSelect selectedValue={this.state.congress} onChangeHandle={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Party</label>
          <PartySelect selectedValue={this.state.party} onChangeHandle={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>State or Territory</label>
          <StatesSelect selectedValue={this.state.selectedState} states={this.props.states} onChangeHandler={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Congress Member</label>
          <NameSearch typedValue={this.state.name} onChangeHandle={this.handleChange}/>
        </Form.Field>
        <Button color="teal" onClick={this.handleReset} fluid>Reset</Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    states: state.states.statesList,
    filters: state.filters,
    members: state.members.membersList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...FilterActions, ...{ fetchMembers } }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberFilter);