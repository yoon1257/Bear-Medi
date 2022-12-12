import React, { useEffect } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import styled from 'styled-components';
import Classification from './components/Classification';
import Map from './components/Map';

const Location = () => {
  function parseStr(dataSet) {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    console.log(dataArr);
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList`,
    })
      .then(function (response) {
        const dataSet = response.data;
        console.log('성공');
        parseStr(dataSet);
      })
      .catch((err) => {
        console.log('실패', err);
      });
  }, []);

  return (
    <LocationContainer>
      <header>
        <span>위치정보</span>
      </header>
      <div className='listContainer'>
        <Classification />
        <Map />
      </div>
    </LocationContainer>
  );
};
const LocationContainer = styled.div`
  .listContainer {
    display: flex;
    justify-content: space-between;
  }
  .line {
    border: 1px solid pink;
    height: 50px;
  }
`;
export default Location;
