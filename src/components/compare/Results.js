import _ from 'lodash';
import React from 'react';
import { Segment, Header, Icon, Label, Table, Divider } from 'semantic-ui-react';
import { parties, chambers } from '../../helpers/congress';

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
      <Table definition unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell/>
            <Table.HeaderCell textAlign='center'>{firstMember['full-name']}</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>{secondMember['full-name']}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing textAlign='right'>Party</Table.Cell>
            <Table.Cell textAlign='center'><Label color={parties[firstMember.party].color}>{firstMember.party}</Label></Table.Cell>
            <Table.Cell textAlign='center'><Label color={parties[secondMember.party].color}>{secondMember.party}</Label></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='right'>Bills Sponsored</Table.Cell>
            <Table.Cell textAlign='center'>{_.sumBy(firstMember.career.roles, 'bills-sponsored')}</Table.Cell>
            <Table.Cell textAlign='center'>{_.sumBy(secondMember.career.roles, 'bills-sponsored')}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='right'>Bills Co-Sponsored</Table.Cell>
            <Table.Cell textAlign='center'>{_.sumBy(firstMember.career.roles, 'bills-cosponsored')}</Table.Cell>
            <Table.Cell textAlign='center'>{_.sumBy(secondMember.career.roles, 'bills-cosponsored')}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='right'>Votes with the Party</Table.Cell>
            <Table.Cell textAlign='center'>{firstMember['propublica-profile']['votes-with-party-pct']}%</Table.Cell>
            <Table.Cell textAlign='center'>{secondMember['propublica-profile']['votes-with-party-pct']}%</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default CompareResults;