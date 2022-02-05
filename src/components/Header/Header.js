import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from './Menu';
import User from './User';
import MenuMobile from './MenuMobile';

// template
const Header = () => {
  // viewport
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 1023;

  useEffect(() => {
    return () => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  // MenuButton Event
  const [click, setClick] = useState(false);
  const onToggle = () => setClick(click => !click);
  
  // render
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <h1>
            <Logo />
          </h1>
          {width > breakPoint && <Menu />}
          {width > breakPoint && <User />}
          {width < breakPoint && <MenuButton onClick={onToggle}/>}
          {click && <MenuMobile />}
        </HeaderContainer>
      </HeaderWrapper>
      <Spaces />
    </>
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
  z-index: 999;
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

const MenuButton = styled(GiHamburgerMenu)`
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
`;

const Spaces = styled.div`
  height: 100px;
`;

export default Header;