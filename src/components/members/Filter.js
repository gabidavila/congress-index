import React from 'react';
import { connect } from 'react-redux';
import * as FilterActions from '../../actions/filterActions';
import { bindActionCreators } from 'redux';
import StatesSelect from '../interface/StatesSelect';
import PartySelect from '../interface/PartySelect';
import CongressSelect from '../interface/CongressSelect';

class MemberFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.filters
    };
  }

  componentDidMount() {
    this.props.fetchStates();
    this.props.membersFilter({});
  }

  handleChange = (key, value) => {
    const filter = { [key]: value };

    this.setState({ ...filter }, () => {
      this.props.addFilter(filter);
      this.props.membersFilter(this.state);
    });
  };

  render() {
    return (
      <div>
        <CongressSelect onChangeHandle={this.handleChange}/>
        <StatesSelect states={this.props.states} onChangeHandler={this.handleChange}/>
        <PartySelect onChangeHandle={this.handleChange} r/>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    states: state.states.statesList,
    filters: state.filters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FilterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberFilter);