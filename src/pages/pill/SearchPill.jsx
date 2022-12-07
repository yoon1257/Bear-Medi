import React from 'react';
import styled from 'styled-components';
import { font, pastelGreen } from '../../styles/theme';
import { SlMagnifier } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

const SearchPill = () => {
  const navigate = useNavigate();
  const goToShowPill = () => {
    navigate('/showPill');
  };

  return (
    <SearchPillContainer>
      <div>
        <h1>어떤 질환의 처방을 알고 싶나요?</h1>
        <p>
          건강보험심사평가원의 데이터 공개 정책 변경에 따라 2019년 이후의 표본데이터를 제공 받을 수 없게 되어 <br />
          현재의 처방정보는 2018년 까지의 표본데이터 기준임을 알려 드립니다. (2021.8.5)
        </p>
      </div>
      <div>
        <input className='inputPill' type='text' placeholder='관련질병 키워드나 상병코드를 입력해주세요' />
        <SlMagnifier className='magnifier' onClick={goToShowPill} />
      </div>
    </SearchPillContainer>
  );
};

const SearchPillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  h1 {
    margin-bottom: 30px;
  }
  p {
    color: ${font};
    margin-bottom: 30px;
  }
  .inputPill {
    box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 7%), 0px 16px 24px 2px rgb(0 0 0 / 5%), 0px 6px 30px 5px rgb(0 0 0 / 3%);
    width: 540px;
    padding: 15px 30px;
    border-radius: 30px;
    border: none;
    &:focus {
      outline: 3px solid ${pastelGreen};
    }
  }
  .magnifier {
    position: relative;
    right: 35px;
    cursor: pointer;
    &:hover {
      color: ${pastelGreen};
    }
  }
`;
export default SearchPill;
