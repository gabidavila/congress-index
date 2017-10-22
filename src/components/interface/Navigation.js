import React from 'react';
import { Button, Icon, Segment, Header } from 'semantic-ui-react';

const ContainerNavigation = (props) => {
  return (
    <Segment vertical textAlign='center'>
      <Button disabled={!props.previousButton} onClick={(e) => props.handlePreviousButton(e)} color={props.previousButton ? 'blue' : 'grey'}
        content='Previous' icon='left arrow' labelPosition='left'/>
      <Header as='span' style={{ margin: '10px' }}>{props.text}&nbsp;</Header>
      <Button disabled={!props.nextButton} onClick={(e) => props.handleNextButton(e)}
        color={props.nextButton ? 'blue' : 'grey'} content='Next' icon='right arrow'
        labelPosition='right'/>
    </Segment>
  );
}

export default ContainerNavigation;
