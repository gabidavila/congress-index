import React from 'react';
import MapFeedItem from './FeedItem';
import { Segment, Header, Icon, Feed, Divider } from 'semantic-ui-react';

const MapFeedList = (props) => {
  const feedItems = props.members.map((member) => <MapFeedItem key={member.id} member={member.attributes} />);
  return (
    <Segment>
      <Header as='h2'>
        <Icon name='users'/>
        <Header.Content>
          {props.state}
        </Header.Content>
      </Header>
      <Divider />
      <Feed className='member-feed'>
        {feedItems}
      </Feed>
    </Segment>
  );
};

export default MapFeedList;
