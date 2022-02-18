import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SlideData from '../../DB/SlideData.json';

const Slider = () => {
  // 총 슬라이드 개수
  const TOTAL_SLIDES = 7;

  // 동작 시간
  const delay = 3000;

  // 현재 슬라이드 상태값
  const [currentSlide, setCurrentSlide] = useState(0);
  // 슬라이드 DOM
  const slideRef = useRef(null);
  // 작동시간 DOM
  const timeoutRef = useRef(null);

  // 다음으로 슬라이드 (슬라이드 버튼)
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // 이전으로 슬라이드 (슬라이드 버튼)
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // 슬라이드 이동 시 시간이 어긋나는 버그가 발생
  // clearTimeout 함수를 사용해서 한 장씩 넘어갈때마다 시간을 초기화
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
    // 시간 초기화 함수
    resetTimeout();
    // 현재 Dom에 일정시간이 되면 자동으로 넘어가게 하는 로직
    timeoutRef.current = setTimeout(() => 
      // 이전 index값이 총 slide 개수와 같으면 처음으로 돌아가고 아니면 그 다음 슬라이드로 넘어감
      setCurrentSlide((prevIndex) => prevIndex === TOTAL_SLIDES ? 0 : prevIndex + 1),
      delay
    );
    // 슬라이드 이동 시 인터렉션
    slideRef.current.style.transition = "ease 1000ms";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;

    // 시간 초기화 함수를 cleanup 함수 형태로 반환
    return () => {
      resetTimeout();
    }
    // currentSlide가 변경될 때마다 실행
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
  position: relative;
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
  position: absolute;
  bottom: 45%;
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
  position: absolute;
  bottom: 30px;
  left: 45%;
  @media all and (max-width: 1024px) {
    left: 40%;
  }
`;

const DotButton = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0;
  background: #ccc;
  &.active {
    background: #ffc300;
  }
`;

export default React.memo(Slider);