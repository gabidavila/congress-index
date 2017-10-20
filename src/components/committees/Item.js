import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import moment from 'moment';
import uuid from 'uuid';

const CommitteeItem = (props) => {
  const committee = props.committee;
  const handleClick = (e, titleProps) => {
    props.onClickHandle(e, titleProps);
  };

  return (
    [
      <Accordion.Title key={uuid()} active={props.activeIndex === props.index}
        index={props.index} onClick={handleClick}>
        <Icon name='dropdown'/>
        <span dangerouslySetInnerHTML={{__html: committee.name}}></span> - {committee.code}
      </Accordion.Title>,
      <Accordion.Content key={uuid()} active={props.activeIndex === props.index}>
        <p>
          <strong>Code: </strong> {committee.code}
        </p>
        <p>
          <strong>Rank in Party: </strong> {committee['rank-in-party']}
        </p>
        { committee['begin-date'] ?
          <p>
            <strong>Begin Date: </strong> {moment(committee['begin-date']).format('MM/DD/YYYY')}
          </p>
          : null
        }
        <p>
          <strong>End Date: </strong> {moment(committee['end-date']).format('MM/DD/YYYY')}
        </p>
        {
          committee['side'] ?
            <p>
              <strong>Side</strong>: {committee['side']}
            </p>
            : null
        }

      </Accordion.Content>
    ]
  );
};

export default CommitteeItem;