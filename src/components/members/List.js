import React from 'react';
import { Card } from 'semantic-ui-react';
import MemberCard from './Card';
import uuid from 'uuid';

const MemberList = (props) => {
  const listMembers = props.members.map((member) => <MemberCard key={uuid()} data={member}/>);
  return (
    <Card.Group stackable className="members" itemsPerRow={props.columns || 4}>
      {listMembers}
    </Card.Group>
  );
};

export default MemberList;