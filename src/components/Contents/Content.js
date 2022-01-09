import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import MobileSlider from './MobileSlider';
import MainContent from './MainContent';

const Content = () => {
  // viewport
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  // render
  return (
    <ContentWrapper>
      {width < breakPoint ? <MobileSlider /> : <Slider />}
      <MainContent />
    </ContentWrapper>
  );
};

// style
const ContentWrapper = styled.div`
  flex: 1;
`;

export default Content;