import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';

const TopMenuBar = () => {
  return (
    <Menu color='yellow' stackable inverted borderless className='remove-radius'>
      <Container>
        <Menu.Item as='a' href='/' header style={{fontSize: '18px', textAlign: 'center'}}>
          <Icon name='star' color='red'/> Congress, <br/>
          Who is?<Icon name='star' color='blue'/>
        </Menu.Item>
        <Menu.Item as='a' href='/'>Home</Menu.Item>
        <Menu.Item as='a' href='/map'>Map</Menu.Item>
        <Menu.Item as='a' href='/bills'>Bills</Menu.Item>
        <Menu.Item as='a' href='/compare'>Compare</Menu.Item>
        <Menu.Item as='a' href='/about'>About</Menu.Item>
      </Container>
    </Menu>
  );
};

export default TopMenuBar;
