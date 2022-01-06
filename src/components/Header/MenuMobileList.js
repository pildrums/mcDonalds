import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';

const MenuMobileList = ({title, list}) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const [isCollepse, setIsCollepse] = useState(false);

  const handleButtonClick = useCallback(
    e => {
      e.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsCollepse(!isCollepse);
    },
    [isCollepse]
  );

  return (
    <Container>
      <Header onClick={handleButtonClick}>
        {title}
      </Header>
      <ContentsWrapper ref={parentRef}>
          <Contents ref={childRef}>
          {list.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          </Contents>
      </ContentsWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 2px solid #fff;
  text-align: center;
  font-size: 2rem;
  &:last-child {
    border-bottom: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;
  user-select: none;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
`;

const Contents = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.5rem;
    font-weight: 300;
    padding: 0.5rem 0;
    user-select: none;
  }
`;

export default React.memo(MenuMobileList);