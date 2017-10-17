import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { parties, chambers } from '../../helpers/congress';

class MemberCard extends React.Component {
  render() {
    const profile = this.props.data.attributes;
    const profileImage = profile['twitter-picture-url'] || '/images/default_user.png';
    const profileUrl = `/members/${ profile['pp-member-id']}`;
    return (
      <Card link className="member" color={parties[profile.party].color}>
        <a className='ui image' title={profile['full-name']} href={profileUrl}>
          <img alt={profile['full-name']} src={profileImage} ref={img => this.img = img} onError={() => {
            this.img.src = '/images/default_user.png';
          }}/>
        </a>
        <Card.Content href={profileUrl}>
          <Card.Header>{profile['full-name']}</Card.Header>
          <Card.Meta><Icon name='calendar'/> Next election in {profile['next-election']}</Card.Meta>
          <Card.Description className="congress_type">
            <p>
              <Icon name={chambers[profile['congress-type']].icon} />
              {profile['congress-type']}&nbsp;
              ({profile.congress})
            </p>
            <p>
              <Icon name='marker' />
              <em>{profile.state.state} - {profile.state['state-full']}</em>
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon color={parties[profile.party].color} name='user'/>
            <strong>{parties[profile.party].name}</strong>
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default MemberCard;