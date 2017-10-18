import React from 'react';
import { Button, Icon, Header } from 'semantic-ui-react';

const ProfileSocialMedia = ({ member }) => {
  const youtubeAccount = member['propublica-profile']['youtube-account'];
  const facebookAccount = member.facebook;
  const twitterAccount = member['twitter-handle'];

  return (
    <div className='social-media'>
      <Header as='h4' textAlign='center' color='black'>
        <Icon name='id card outline'/> Social Media
      </Header>
      {twitterAccount ?
        <Button as='a' style={{ borderRadius: 0 }} fluid href={`http://www.twitter.com/${twitterAccount}`}
          color='twitter'><Icon name='twitter'/>Twitter</Button> : null}
      {facebookAccount ?
        <Button as='a' style={{ borderRadius: 0 }} fluid href={`http://www.facebook.com/${facebookAccount}`}
          color='facebook'><Icon name='facebook'/>Facebook</Button> : null}
      {youtubeAccount ?
        <Button as='a' style={{ borderRadius: 0 }} fluid href={`http://www.youtube.com/${youtubeAccount}`}
          color='youtube'><Icon name='youtube'/>Youtube</Button> : null}
    </div>
  );
};

export default ProfileSocialMedia;
