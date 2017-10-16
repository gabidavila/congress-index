import React from 'react';
import { Item, Divider, Icon } from 'semantic-ui-react';
import RoleItem from './RoleItem';

const MemberRolesList = ({ roles }) => {
  const rolesList = roles.map((role) => <RoleItem key={role.congress} role={role}/>);
  return (
    <div className='career'>
      <Divider horizontal> <Icon name='suitcase'/> Career </Divider>
      <Item.Group divided>
        {rolesList}
      </Item.Group>
    </div>
  );
};

export default MemberRolesList;