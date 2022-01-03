import React, { useState } from 'react';
import styled from 'styled-components';

const MenuMobileList = (props) => {
  const {title, list, activeIndex, setActiveIndex, idx} = props;

  const [clickedIdx, setClickedIdx] = useState();

  const onToggle = () => {
    setActiveIndex(idx);
    setClickedIdx(null);
  };

  const handleToggle = (idx) => {
    setClickedIdx(idx);
  };

  return (
    <MenuMobileItem>
      <p onClick={onToggle}>{title}</p>
      <SubMenu className={idx === activeIndex ? '' : 'closed'}>
        {list?.map((menu, idx) => (
          <SubMenuItem
            onClick={e => handleToggle(e, idx)}
            className={clickedIdx === idx ? 'strong' : ''}
          >
            <p>{menu}</p>
          </SubMenuItem>
        ))}
      </SubMenu>
    </MenuMobileItem>
  );
};

const MenuMobileItem = styled.li`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 2px solid #fff;
  text-align: center;
  font-size: 2rem;
  p {
    cursor: pointer;
  }
`;

const SubMenu = styled.ul`
  border-top: 1px solid #fff;
  margin-top: 1rem;
  &.closed {
    display: none;
  }
`;

const SubMenuItem = styled.li`
  font-size: 1.25rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
`;

export default MenuMobileList;