import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import MobileSlider from './MobileSlider';

const Content = () => {
  // viewport
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      {width < breakPoint ? <MobileSlider /> : <Slider />}
    </>
  );
};

export default Content;