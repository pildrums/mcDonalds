import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../logo.svg';

import Menu from './Menu';
import User from './User';


// template
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h1>
          <Logo />
        </h1>
        <Menu />
        <User />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  position: fixed;
  top: 0;
`;

const HeaderContainer = styled.div`
  width: 1320px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: coral;
  h1 {
    cursor: pointer;
    svg {
      width: 80px;
    }
  }
`;

export default Header;