import React from 'react';
import styled from 'styled-components';
import HeaderData from 'DB/HeaderData.json';

const SubMenu = ({onMouseOut}) => {
  return (
    <SubMenuWrapper onMouseLeave={onMouseOut}>
      <SubMenuContent>
        <SubMenuContainer>
          {/* 각각의 리스트 등을 map 함수를 사용하여 코드를 줄임 */}
          <ul>
            {HeaderData.burger.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <ul>
            {HeaderData.store.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <ul>
            {HeaderData.news.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <ul>
            {HeaderData.story.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </SubMenuContainer>
      </SubMenuContent>
    </SubMenuWrapper>
  );
};

const SubMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 999;
`;

const SubMenuContent = styled.div`
  width: inherit;
  height: 300px;
  background: #ffc300;
  border-top: 1px solid #fff;
  display: flex;
  justify-content: center;
  justify-self: center;
  padding: 0 20px;
  position: relative;
`;

const SubMenuContainer = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-evenly;
  ul {
    margin-top: 0.5rem;
    &:nth-child(1) {
      position: relative;
      left: 84px;
    }
      &:nth-child(2) {
      position: relative;
      left: 20px;
    }
      &:nth-child(3) {
      position: relative;
      right: 8px;
    }
      &:nth-child(4) {
      position: relative;
      right: 0px;
    }
    li {
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        text-decoration: 1px underline #000;
      }
    }
  }
`;

export default SubMenu;