import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from 'logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from './Menu';
import User from './User';
import MenuMobile from './MenuMobile';

// template
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth); // useState를 이용해 브라우저 크기를 초기 상태로 지정
  const breakPoint = 1023; // break point 지정

  // resize 될 때마다 줄어든 viewport로 상태변화
  // 메모리 누수 해결을 위해서 cleanup 함수로 반환
  useEffect(() => {
    return window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  // 메뉴 토글
  const [click, setClick] = useState(false);
  const onToggle = () => setClick(click => !click);
  
  // JSX
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <h1>
            <Logo />
          </h1>
          {/* width와 breakePoint의 크기를 비교해 렌더링 여부 결정 */}
          {width > breakPoint && <Menu />}
          {width > breakPoint && <User />}
          {width < breakPoint && <MenuButton onClick={onToggle}/>}
          {/* MenuButton을 클릭하면 MenuMobile 컴포넌트 렌더링 */}
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