import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../logo.svg';

import Menu from './Menu';
import User from './User';


// template
const Header = () => {
  return (
    <Fixed>
      <HeaderWrapper>
        <HeaderContainer>
          <h1>
            <Logo />
          </h1>
          <Menu />
          <User />
        </HeaderContainer>
      </HeaderWrapper>
    </Fixed>
  );
};

// style
const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-bottom: 1px solid #ccc;
`;

const HeaderContainer = styled.div`
  width: 1320px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    cursor: pointer;
    svg {
      width: 80px;
    }
  }
`;

export default Header;