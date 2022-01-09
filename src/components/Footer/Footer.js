import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import {ReactComponent as Logo} from '../../logo.svg';

// render
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <StyledLogo />
        <LeftContent>
          <p>개인정보 처리방침</p>
          <p>위치정보 이용약관</p>
          <p>사이트맵</p>
          <p>임차문의</p>
          <p>고객문의</p>
          <p>인재채용</p>
        </LeftContent>
        <CenterContent>
          <p>한국맥도날드(유)</p>
          <p>대표이사: 앤토니 마티네즈</p>
          <p>사업자등록번호: 101-81-26409</p>
          <p>전화주문: 1600-5252</p>
          <p>COPYRIGHT ⓒ 2022 ALL RIGHTS RESERVED BY McDonald's.</p>
        </CenterContent>
        <RightContent>
          <div className="icon">
            <FaYoutube />
          </div>
          <div className="icon">
            <FaFacebookSquare />
          </div>
          <div className="icon">
            <FaInstagram />
          </div>
        </RightContent>
      </FooterContent>
    </FooterWrapper>
  );
};

// style
const FooterWrapper = styled.footer`
  width: 100%;
  background: #ffc300;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLogo = styled(Logo)`
  width: 120px;
  height: 120px;
  align-self: center;
  & path {
    fill: #fff;
  }
`;

const LeftContent = styled.div`
  p {
    cursor: pointer;
    font-size: 14px;
    margin: 0.5rem 0;
  }
  @media all and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }
`;
const CenterContent = styled.div`
  @media all and (max-width: 1023px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #333;
    padding: 2rem 0;
  }
  p {
    margin: 0.5rem 0;
    font-size: 14px;
  }
`;
const RightContent = styled.div`
  display: flex;
  margin-top: 0.5rem;
  @media all and (max-width: 1023px) {
    width: 100%;
    border-top: 1px solid #333;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    
  }
  .icon {
    background: #333;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin: 0 0.5rem;
  }
  svg {
    cursor: pointer;
    font-size: 2rem;
    color: #fff;
  }
`;

export default Footer;