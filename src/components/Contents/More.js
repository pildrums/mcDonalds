import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import MainContentData from '../../DB/MainContents.json';

const More = () => {
  // 더보기 버튼을 클릭 전에 보여줄 item의 초기상태 (6개 씩)
  const [visible, setVisible] = useState(6);

  // 버튼 클릭 시 item을 추가로 6개를 보여주는 함수
  const onMore = () => {
    setVisible(prevValue => prevValue + 6);
  };

  return (
    <MoreWrapper>
      <MoreContainer>
      <h1>McDonald's Live</h1>
        <MoreItemList>
          {/*
            배열의 첫번째 index[0]와 마지막 index[5]를 파라미터로 받아서
            사이의 원소를 새로운 배열로 만들어서 렌더링하도록 로직 설계
          */}
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
  display: flex;
  justify-content: center;
  padding: 3rem 1.25rem;
`;

const MoreContainer = styled.div`
  width: 1320px;
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
  margin: 20px 0;
  background: #fff;
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