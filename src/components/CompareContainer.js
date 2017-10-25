import _ from 'lodash';
import React from 'react';
import CompareSearch from './compare/Search';
import { Grid, Header, Icon } from 'semantic-ui-react';
import { getMemberById } from '../adapters/congress';

class CompareContainer extends React.Component {
  state = {
    chamber: 'senate',
    members: []
  };

  componentWillMount() {
    if (['senate', 'house'].includes(this.props.match.params.chamber)) {
      this.setState({chamber: this.props.match.params.chamber});
    }
  }

  componentDidMount() {
    const membersIds = [this.props.match.params.firstMember, this.props.match.params.secondMember]
    if (_.compact(membersIds).length === 2) {
      _.compact(membersIds).forEach((memberId) => {
        getMemberById(memberId).then((memberData) => {
          if (memberData.data.attributes['congress-type'] === this.props.match.params.chamber) {
            this.setState({members: [...this.state.members, memberData['data']]});
          }
        });
      });
    }
  }

  updateUrl = (members, chamber) => {
    this.setState({chamber});
    this.props.history.push(`/compare/${chamber}/${members.join('/')}`);
  };

  render() {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <Header as='h1' dividing>
            <Icon name='users'/>
            <Header.Content>
              Compare members of the House or Senate
              <Header.Subheader>
                Choose two members to start
              </Header.Subheader>
            </Header.Content>
          </Header>
          <CompareSearch chamber={this.state.chamber} members={this.state.members} onCompare={this.updateUrl}/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CompareContainer;
