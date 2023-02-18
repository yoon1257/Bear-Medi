import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 버튼을 이벤트 주기
  const toggleSide = () => {
    setIsOpen(true);
  };
  return (
    <HeaderContainer>
      <button onClick={toggleSide}>
        <GiHamburgerMenu />
      </button>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div``;
export default Header;
