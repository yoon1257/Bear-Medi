import React from 'react';
import { HiSearchCircle } from 'react-icons/hi';
import styled from 'styled-components';
import { pastelBlue, pink } from '../../../styles/theme';
import List from './List';

const Classification = () => {
  return (
    <ClassificationContianer>
      <div className='category'>hello</div>
      <div className='list'>
        <input className='search' type='text' placeholder='병원명 또는 약국명 입력' />
        <HiSearchCircle className='serchIcon' />
        <List />
        <List />
      </div>
    </ClassificationContianer>
  );
};

const ClassificationContianer = styled.div`
  display: flex;

  .category {
    width: 50px;
    background-color: ${pink};
  }
  .list {
    width: 300px;
    padding: 20px;
    background-color: ${pastelBlue};
    .search {
      width: 80%;
      margin: 10px;
      border-radius: 20px;
      border: none;
      line-height: 38px;
      padding: 0 15px;
      overflow: auto;
    }
    .serchIcon {
      position: relative;
      top: 13px;
      right: 5px;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;
export default Classification;
