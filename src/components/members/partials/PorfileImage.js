import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import { parties, chambers } from '../../../helpers/congress';

const ProfiileImage = ({ member }) => {
  const profileImage = member['twitter-picture-url'] || '/images/default_user.png';

  return (
    <div>
      <div className="ui fluid image">
        {member['propublica-profile']['in-office'] ? <a className="ui green right corner label" title="in office">
          <Icon name='checkmark' />
        </a> : null}
        <img className='profile-image' alt={member['full-name']} src={profileImage} ref={img => this.img = img} onError={() => {
          this.img.src = '/images/default_user.png';
        }}
        />
      </div>
      <Segment color='black' textAlign='center'>
        <Icon name={chambers[member['congress-type']].icon} size='small'/>{chambers[member['congress-type']].name}
      </Segment>
      <Segment color={parties[member.party].color} textAlign='center'>
        <Icon name='fa' size='large' color={parties[member.party].color}/>{parties[member.party].name}
      </Segment>
    </div>
  );
};

export default ProfiileImage;
