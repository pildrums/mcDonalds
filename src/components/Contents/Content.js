import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import MobileSlider from './MobileSlider';
import More from './More';

const Content = () => {
  // viewport
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  useEffect(() => {
    return () => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  // render
  return (
    <ContentWrapper>
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