import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import MobileSlider from './MobileSlider';
import More from './More';

const Content = () => {
  // viewport
  const [width, setWidth] = useState(window.innerWidth); // useState를 이용해 브라우저 크기를 초기 상태로 지정
  const breakPoint = 768; // break point 지정

  // resize 될 때마다 줄어든 viewport로 상태변화
  // 메모리 누수 해결을 위해서 cleanup 함수로 반환
  useEffect(() => {
    return window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  // JSX
  return (
    <ContentWrapper>
      {/* 
        width가 지정된 breakPoint보다 작을 경우에 MobileSlider 렌더링
        그 외에는 Slider 렌더링
      */}
      {width < breakPoint ? <MobileSlider /> : <Slider />}
      <More />
    </ContentWrapper>
  );
};

// style
const ContentWrapper = styled.div`
  flex: 1;
  overflow-x: hidden;
`;

export default Content;