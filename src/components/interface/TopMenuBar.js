import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

const TopMenuBar = () => {
  return (
    <Menu color='yellow' stackable inverted borderless className='remove-radius'>
      <Container>
        <Menu.Item as='a' href='/' header>
          <Image centered
            src='/images/logo.png' alt='Congress Browser'
          />
        </Menu.Item>
        <Menu.Item as='a' href='/'>Home</Menu.Item>
        <Menu.Item as='a' href='/map'>Map</Menu.Item>
      </Container>
    </Menu>
  );
};

export default TopMenuBar;
