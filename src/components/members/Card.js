import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { parties } from '../../helpers/parties';

class MemberCard extends React.Component {
  render() {
    const profileImage = this.props.data.twitter_picture_url || '/images/default_user.png';
    return (
      <Card link className="member" color={parties[this.props.data.party].color}>
        <Image src={profileImage} href={`/member/${this.props.data.pp_member_id}`}/>
        <Card.Content href={`/member/${this.props.data.pp_member_id}`}>
          <Card.Header>{this.props.data.full_name}</Card.Header>
          <Card.Meta><Icon name='calendar'/> Next election in {this.props.data.next_election}</Card.Meta>
          <Card.Description className="congress_type">
            <p>
              {this.props.data.congress_type}&nbsp;
              ({this.props.data.congress})
            </p>
            <p>
              <em>{this.props.data.state.state} - {this.props.data.state.state_full}</em>
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon color={parties[this.props.data.party].color} name='user'/>
            <strong>{parties[this.props.data.party].name}</strong>
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default MemberCard;