import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SlideData from '../../DB/SlideData.json';

const TOTAL_SLIDES = 7;
const delay = 5000;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    clearTimeout(slideRef.current);
    setTimeout(
      () => 
        setCurrentSlide((prevIndex) => prevIndex === TOTAL_SLIDES - 1 ? 0 : prevIndex + 1),
        delay
    );
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;

    return () => {}
  }, [currentSlide]);

  return (
    <SliderWrapper>
      <SliderContainer ref={slideRef}>
        {SlideData.img.map(item => (
          <img key={item.id} src={item.url} alt='' />
        ))}
      </SliderContainer>
      <ButtonWrapper>
        <Button onClick={prevSlide}>
          <MdKeyboardArrowLeft />
        </Button>
        <Button onClick={nextSlide}>
          <MdKeyboardArrowRight />
        </Button>
      </ButtonWrapper>
      <DotWrapper>
        {SlideData.img.map(item => (
          <DotButton
            key={item.id}
            className={currentSlide === item.id ? " active" : ""}
            onClick={() => {
              setCurrentSlide(item.id)
            }}
          ></DotButton>
        ))}
      </DotWrapper>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  img {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  bottom: 55%;
`;

const Button = styled.button`
  all: unset;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #707070;
  cursor: pointer;
  svg {
    font-size: 4rem;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #ffc300;
    color: #000;
  }
`;

const DotWrapper = styled.div`
  text-align: center;
  position: sticky;
  bottom: 130px;
`;

const DotButton = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0;
  background: #ccc;
  &.active {
    background: #ffc300;
  }
`;

export default Slider;