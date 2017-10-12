import React from 'react';
import { Item, Segment, Loader, Header } from 'semantic-ui-react';

class MemberProfile extends React.Component {
  render() {
    if (!this.props.profile) {
      return (<Loader active inline='centered'/>);
    }
    console.log(this.props.profile)
    const member = this.props.profile;
    const profileImage = member.twitter_picture_url || '/images/default_user.png';
    return (
      <Segment stacked>
        <Item.Group divided>
          <Item>
            <Item.Image size='small' src={profileImage}/>
            <Item.Content>
              <Item.Header>
                <Header dividing>{member.full_name}</Header>
              </Item.Header>
              <Item.Meta>
                <span className='cinema'>Union Square 14</span>
              </Item.Meta>
              <Item.Description>Desc</Item.Description>
              <Item.Extra>

              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}

export default MemberProfile;