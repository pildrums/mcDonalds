import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';

const MenuMobileList = ({title, list}) => {
  // 부모 컴포넌트 이름
  const parentRef = useRef(null);
  // 자식 컴포넌트 이름
  const childRef = useRef(null);

  // 리스트 아코디언 메뉴 초기 상태 설정
  const [collepse, setCollepse] = useState(false);

  // 렌더링 최적화를 위해 useCallback 사용.
  const handleButtonClick = useCallback(
    // 이벤트 객체를 파라미터에 지정
    e => {
      // 이벤트 실행 시 버블링 방지(부모 요소의 이벤트 전파를 중지)
      e.stopPropagation();
      // 
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      // 부모에 할당된 현재 ref의 높이가 0보다 클 경우
      if (parentRef.current.clientHeight > 0) {
        // 부모의 현재 높이를 0으로 유지
        parentRef.current.style.height = "0";
      } else {
        // 자식 컴포넌트의 현재 크기대로 늘어나도록 변경
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      // collepse 토글
      setCollepse(!collepse);
    },
    // collepse 상태가 변경될 때마다 실행
    [collepse]
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