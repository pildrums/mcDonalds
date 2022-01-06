import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SlideData from '../../DB/SlideData.json';

const TOTAL_SLIDES = 7;
const delay = 3000;

const Slider = () => {
  // 현재 슬라이드 상태값
  const [currentSlide, setCurrentSlide] = useState(0);
  // 슬라이드 DOM
  const slideRef = useRef(null);
  // 작동시간 DOM
  const timeoutRef = useRef(null);

  // 다음으로 슬라이드
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // 이전으로 슬라이드
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // 슬라이드 이동 시 시간 초기화
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // 우클릭 방지
  const onContextMenu = e => {
    e.preventDefault();
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => 
        setCurrentSlide((prevIndex) => prevIndex === TOTAL_SLIDES ? 0 : prevIndex + 1),
        delay
    );
    slideRef.current.style.transition = "ease 1000ms";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;

    return () => {
      resetTimeout();
    }
  }, [currentSlide]);

  return (
    <SliderWrapper onContextMenu={onContextMenu}>
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
              setCurrentSlide(item.id);
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

export default React.memo(Slider);