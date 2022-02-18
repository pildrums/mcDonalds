import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MobileMenu from '../../DB/MobileMenu.json';
import MenuMobileList from './MenuMobileList';

const MenuMobile = () => {
  const [width, setWidth] = useState(window.innerWidth); // useState를 이용해 브라우저 크기를 초기 상태로 지정
  const breakPoint = 1023; // break point 지정

  // resize 될 때마다 줄어든 viewport로 상태변화
  // 메모리 누수 해결을 위해서 cleanup 함수로 반환
  useEffect(() => {
    return window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  // JSX
  return (
    // width가 breakPoint 작을 경우에만 렌더링
    // 모바일 메뉴가 렌더링된 상태에서 크기를 키울 경우에는 렌더링 안함(기존 버그 수정)
    (
      width < breakPoint &&
      <MenuMobileWrapper>
          <MenuMobileContainer>
            {MobileMenu.map(item => (
              <MenuMobileList key={item.id} title={item.title} list={item.list}/>
            ))}
          </MenuMobileContainer>
      </MenuMobileWrapper>
    )
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