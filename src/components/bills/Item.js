import React from 'react';
import {Segment, Header, Icon, Loader, Grid} from 'semantic-ui-react';
import {getBill} from '../../adapters/bills';

class BillsItem extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    getBill(this.props.match.params.id, this.props.match.params.congress).then((b) => {
      console.log(b);
      this.setState({
        bill: b.bill,
        member: b.member,
        metadata: b.metadata,
        loading: false
      });
    });
  }

  render() {
    return (
      (
        <Grid stackable columns={2}>
          <Grid.Column width={12}>
            {this.state.loading ? <Loader active inline='centered'/> : (
              <Segment>
                <Header dividing as='h3'>
                  <Header.Content>
                    {this.state.bill.title} <Icon name='book'/>
                    <Header.Subheader>
                      {this.state.bill.bill} | {this.state.bill.committees}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
                <div>
                  <p>
                    <strong>Introduced Date: </strong>
                    {this.state.bill.introduced_date}
                  </p>
                  {this.state.bill.summary !== '' ? (
                    <p>
                      {this.state.bill.summary}
                    </p>
                  ) : ''}
                </div>
              </Segment>)}
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      )
    );
  }

}

export default BillsItem;