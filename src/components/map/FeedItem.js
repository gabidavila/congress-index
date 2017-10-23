import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { parties } from '../../helpers/congress';

class MapFeedItem extends React.Component {
  render() {
    const member = this.props.member;
    const profileImage = member['twitter-picture-url'] || '/images/default_user.png';
    return (
      <Feed.Event>
        <Feed.Label>
          <a href={`/members/${member['pp-member-id']}`}>
            <img alt={member['full-name']} src={profileImage} ref={img => this.img = img}
              onError={() => {
                this.img.src = '/images/default_user.png';
              }}
            />
          </a>
        </Feed.Label>
        <Feed.Content>
          <a href={`/members/${member['pp-member-id']}`}>
            {member['full-name']}
          </a> next election is <strong>{member['next-election']}</strong>
          <Icon name='star' color={parties[member.party].color}/>
        </Feed.Content>
      </Feed.Event>
    );
  }
};

export default MapFeedItem;
