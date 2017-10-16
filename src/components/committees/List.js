import React from 'react';
import CommitteeItem from './Item';
import { Accordion } from 'semantic-ui-react';
import uuid from 'uuid';

class CommitteeList extends React.Component {
  state = {
    activeIndex: null
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const committeesList = this.props.committees.map((committee, index) => {
      return (
        <CommitteeItem
          key={uuid()}
          activeIndex={this.state.activeIndex}
          index={index}
          onClickHandle={this.handleClick}
          committee={committee}
        />
      );
    });
    return (
      <Accordion fluid styled>
        {committeesList}
      </Accordion>
    );
  }
}

export default CommitteeList;
