import React from 'react';
import { Card } from 'semantic-ui-react';
import MemberCard from './Card';

const MemberList = ({members}) => {
  const listMembers = members.map((member) => <MemberCard key={member.pp_member_id} data={member}/>);
  return (
    <Card.Group className="members" itemsPerRow={4}>
      {listMembers}
    </Card.Group>
  );
};

export default MemberList;