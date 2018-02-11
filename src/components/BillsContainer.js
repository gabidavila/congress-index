import React from 'react';
import { connect } from 'react-redux';
import * as BillsActions from '../actions/billsActions';
import { bindActionCreators } from 'redux';
import { Grid, Header, Icon } from 'semantic-ui-react';

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
                 Most Recent Bills
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
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
