import React from 'react';
import { Segment, Header, Icon, Divider } from 'semantic-ui-react';
import { chambers } from '../../helpers/congress';
import ComparativeTable from './ComparativeTable';
import ComparativeStatistics from './ComparativeStatistics';

const CompareResults = (props) => {
  const firstMember = props.members.first_member.attributes;
  const secondMember = props.members.second_member.attributes;

  return (
    <Segment>
      <Header as='h2' icon textAlign='center'>
        <Icon name={chambers[props.data.chamber].icon}/>
        {chambers[props.data.chamber].name}
        <Header.Subheader>
          <strong>{firstMember['full-name']}</strong>
          <br/><span style={{ fontSize: '22px' }}>&</span><br/>
          <strong>{secondMember['full-name']}</strong>
        </Header.Subheader>
      </Header>
      <Divider/>
      <ComparativeTable firstMember={firstMember} secondMember={secondMember} />
      <Divider/>
      <Header dividing>
        <Icon name='bar chart'/>
        <Header.Content>
          More information
        </Header.Content>
      </Header>
      <ComparativeStatistics data={props.data} />
    </Segment>
  );
};

export default CompareResults;
