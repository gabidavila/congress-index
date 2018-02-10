import React from 'react';
import { connect } from 'react-redux';
import * as BillsActions from '../actions/billsActions';
import { bindActionCreators } from 'redux';

class BillsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRecentBills();
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bills: state.bills.bills,
    offset: state.bills.offset,
    loading: state.bills.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BillsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BillsContainer);
