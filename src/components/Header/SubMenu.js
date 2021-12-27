import React from 'react';
import styled from 'styled-components';
import HeaderData from '../../DB/HeaderData.json';

const SubMenu = ({onMouseOut}) => {
  return (
    <SubMenuWrapper onMouseLeave={onMouseOut}>
      <SubMenuContent>
        <ul className='menu'>
          {HeaderData.burger.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <ul className='store'>
          {HeaderData.store.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <ul className='news'>
          {HeaderData.news.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <ul className='story'>
          {HeaderData.story.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </SubMenuContent>
    </SubMenuWrapper>
  );
};

const SubMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 100px;
  left: 0;
`;

const SubMenuContent = styled.div`
  width: 1320px;
  height: 300px;
  background: #fff;
  justify-self: center;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0 , 0.3);
  border: 1px solid #ccc;
  .menu {
    position: relative;
    top: 0;
    right: 190px;
  }
  .store {
    position: relative;
    right: 70px;
  }
  .news {
    position: relative;
    left: 90px;
  }
  .story {
    position: relative;
    left: 270px;
  }
  ul {
    margin-top: 0.5rem;
    li {
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        text-decoration: 2px underline #000;
      }
    }
  }
`;

export default SubMenu;