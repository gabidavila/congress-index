import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

const TopMenuBar = () => {
  return (
    <Menu color='yellow' stackable inverted borderless>
      <Container>
        <Menu.Item as='a' href='/' header>
          <Image centered
            src='/images/logo.png' alt='Congress Browser'
          />
        </Menu.Item>
        <Menu.Item as='a' href='/'>Home</Menu.Item>
      </Container>
    </Menu>
  );
};

export default TopMenuBar;
