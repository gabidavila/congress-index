import React from 'react';
import { connect } from 'react-redux';
import * as BillsActions from '../actions/billsActions';
import { bindActionCreators } from 'redux';
import { Grid, Header, Icon } from 'semantic-ui-react';
import BillsList from './bills/List';

class BillsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRecentBills();
  }

  render() {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <Header as='h1' dividing>
            <Icon name='book'/>
            <Header.Content>
              Bills
              <Header.Subheader>
                20 Most Recent Bills
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column width={16}>
          <BillsList list={this.props.bills} />
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    bills: state.bills.billsList,
    offset: state.bills.offset,
    loading: state.bills.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BillsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BillsContainer);
