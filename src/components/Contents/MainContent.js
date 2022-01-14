import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const testData = [
  {
    id: 1,
    title: 'test1'
  },
  {
    id: 2,
    title: 'test1'
  },
  {
    id: 3,
    title: 'test1'
  },
  {
    id: 4,
    title: 'test1'
  },
  {
    id: 5,
    title: 'test1'
  },
  {
    id: 6,
    title: 'test1'
  },
];

const MainContent = () => {
  return (
    <MainWrapper>
      <MainContainer>
        <h1>McDonald's Live</h1>
        <MainItemWrapper>
          {testData.map(item => (
            <MainItem key={item.id}>
              <div>
                {item.title}
              </div>
            </MainItem>
          ))}
        </MainItemWrapper>
        <AddWrapper>
          <AddContainer>
            <MdAdd />
          </AddContainer>
        </AddWrapper>
      </MainContainer>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1320px;
  padding: 3rem 0;
  background: coral;
  h1 {
    align-self: center;
    margin-bottom: 20px;
  }
`;

const MainItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MainItem = styled.div`
  margin: 20px;
  background: #afa;
  div {
    width: 400px;
    height: 400px;
  }
`;

const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  `;

const AddContainer = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  background: #ffc300;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  svg {
    font-size: 3rem;
  }
`;

export default MainContent;