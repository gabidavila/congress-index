import React from 'react';
import { Button, Icon, Header } from 'semantic-ui-react';

const ProfileSocialMedia = ({member}) => {
  return (
    <div className='socialMedia'>
      <Header as='h4' textAlign='center' color='black'>
        <Icon name='id card outline'/> Social Media
      </Header>
      <Button as='a' style={{borderRadius: 0}} fluid href={`http://www.twitter.com/${member['twitter-handle']}`} color='twitter'><Icon name='twitter'/>Twitter</Button>
      <Button as='a' style={{borderRadius: 0}} fluid href={`http://www.facebook.com/${member.facebook}`} color='facebook'><Icon name='facebook'/>Facebook</Button>
      <Button as='a' style={{borderRadius: 0}} fluid href={`http://www.youtube.com/${member['propublica-profile']['youtube-account']}`} color='youtube'><Icon name='youtube' />Youtube</Button>
    </div>
  );
};

export default ProfileSocialMedia;