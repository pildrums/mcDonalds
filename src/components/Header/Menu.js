import React, {useState} from 'react';
import styled from 'styled-components';
import SubMenu from './SubMenu';
import HeaderData from '../../DB/HeaderData.json';

const Menu = () => {
  const [visible, setVisible] = useState(false);
  const onMouseOver = () => setVisible(true);
  const onMouseOut = () => setVisible(false);
  return (
    <MainMenuWrapper>
      <ul className="main">
        {HeaderData.menu.map(item => (
          <li key={item.id} onMouseOver={onMouseOver}>{item.title}</li>
        ))}
      </ul>
      {visible && <SubMenu onMouseOut={onMouseOut}/>}
    </MainMenuWrapper>
  );
};

const MainMenuWrapper = styled.nav`
  flex: 3;
  .main {
    display: flex;
    justify-content: space-evenly;
    li {
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
      color: #fff;
    }
  }
`;

export default Menu;