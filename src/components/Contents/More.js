import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import MainContentData from '../../DB/MainContents.json';

const More = () => {
  const [visible, setVisible] = useState(6);

  const onMore = () => {
    setVisible(prevValue => prevValue + 6);
  };

  return (
    <MoreWrapper>
      <MoreContainer>
        <h1>McDonald's Live</h1>
          <MoreItemList>
          {MainContentData.data.slice(0, visible).map(item => (
            <MoreItem key={item.id}>
              <img src={item.img} alt="" />
              <div className='textArea'>
                <p>{item.text}</p>
              </div>
            </MoreItem>
          ))}
          </MoreItemList>
        <button onClick={onMore}>
          <MdAdd />
        </button>
      </MoreContainer>
    </MoreWrapper>
  );
};

const MoreWrapper = styled.div`
  width: 100%;
  padding: 3rem 20px;
  display: flex;
  justify-content: center;
`;

const MoreContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  button {
    width: 100px;
    height: 100px;
    background: #ffc300;
    border: none;
    cursor: pointer;
    border-radius: 100%;
    align-self: center;
    font-size: 2.5rem;
    margin-top: 1.5rem;
  }
`;

const MoreItemList = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media all and (min-width: 320px) and (max-width: 788px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const MoreItem = styled.div`
  width: 366px;
  height: 450px;
  background: #fff;
  margin: 20px 0;
  border-radius: 1rem;
  box-shadow: 2px 4px 5px 2px rgba(0,0,0,0.2);
  cursor: pointer;
  img {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  .textArea {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #000;
      font-size: 1.125rem;
      font-weight: 500;
      white-space: pre-line;
      margin-top: 20px;
    }
  }
`;

export default React.memo(More);