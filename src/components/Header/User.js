import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

const User = () => {
  return (
    <UserWrapper>
      <AiOutlineUser />
      <AiOutlineSearch />
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: #FFC300;
    cursor: pointer;
  }
`;
export default User;