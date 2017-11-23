import React from 'react';
import { Statistic } from 'semantic-ui-react';

const ComparativeStatistics = (props) => {
  return (
    <Statistic.Group widths='three'>
      <Statistic>
        <Statistic.Value>{props.data.bills.common_bills}</Statistic.Value>
        <Statistic.Label>Common Bills</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{props.data.votes.common_votes}</Statistic.Value>
        <Statistic.Label>Common Votes</Statistic.Label>
      </Statistic>
      <Statistic color='blue'>
        <Statistic.Value>{props.data.votes.common_votes - props.data.votes.disagree_votes}</Statistic.Value>
        <Statistic.Label>Same Votes</Statistic.Label>
      </Statistic>
      <Statistic color='green'>
        <Statistic.Value>{props.data.votes.agree_percent}%</Statistic.Value>
        <Statistic.Label>Agreement %</Statistic.Label>
      </Statistic>
      <Statistic color='red'>
        <Statistic.Value>{props.data.votes.disagree_percent}%</Statistic.Value>
        <Statistic.Label>Disagreement %</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
};

export default ComparativeStatistics;
