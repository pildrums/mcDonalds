import React from 'react';
import styled from 'styled-components';

const MainContent = () => {
  return (
    <MainWrapper>
      <MainContainer></MainContainer>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem;
`;

const MainContainer = styled.div`
  display: flex;
  width: 1320px;
  height: 300px;
  background: coral;
`;

export default MainContent;