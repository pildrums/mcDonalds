import React from 'react';
import styled from 'styled-components';

const Wrapper = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Wrapper;