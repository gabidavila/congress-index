import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

const TopMenuBar = () => {
  return (
    <Menu color='yellow' inverted borderless>
      <Container>
        <Menu.Item as='a' header>
          <Image
            src='/images/logo.png'
            style={{ marginRight: '1.5em' }}
          />
          <span style={{fontSize: '18px'}}>Congress Browser</span>
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
      </Container>
    </Menu>
  );
};

export default TopMenuBar;