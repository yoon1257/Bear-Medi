import React from 'react';
import styled from 'styled-components';
import { font } from '../../../styles/theme';

const List = () => {
  return (
    <ListContainer>
      <h3>병원이름</h3>
      <span>거리</span> <span>전공</span> <span>전화번호</span>
      <p>주소</p>
    </ListContainer>
  );
};
const ListContainer = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;

  h3 {
    font-size: 18px;
    color: #000000;
    font-weight: 700;
    display: block;
    padding: 0 85px 5px 0;
    position: relative;
    line-height: 1.27;
  }
  span {
    font-size: 13px;
    color: ${font};
  }
  p {
    font-size: 13px;
    color: ${font};
    cursor: pointer;
  }
`;
export default List;
