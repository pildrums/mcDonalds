import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MobileMenu from '../../DB/MobileMenu.json';
import MenuMobileList from './MenuMobileList';

const MenuMobile = () => {
  // viewport
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 1023;

  useEffect(() => {
    return window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  //render
  return (
    width < breakPoint &&
    <MenuMobileWrapper>
        <MenuMobileContainer>
          {MobileMenu.map(item => (
            <MenuMobileList key={item.id} title={item.title} list={item.list}/>
          ))}
        </MenuMobileContainer>
    </MenuMobileWrapper>
  );
};

const MenuMobileWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #ffc300;
  top: 100px;
  left: 0;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 90px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuMobileContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MenuMobile;