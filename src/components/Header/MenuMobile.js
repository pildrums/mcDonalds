import React, { useState } from 'react';
import styled from 'styled-components';
import MobileMenu from '../../DB/MobileMenu.json';
import MenuMobileList from './MenuMobileList';

const MenuMobile = () => {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <MenuMobileWrapper>
      <MenuMobileContainer>
        {MobileMenu.map((item, idx) => {
          const active = idx === activeIndex ? 'active' : '';
          return (
            <MenuMobileList
              title={item.title}
              idx={idx}
              list={item.list}
              active={active}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          )
        })}
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