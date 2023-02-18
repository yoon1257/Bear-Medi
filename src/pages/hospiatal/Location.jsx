import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Classification from './components/Classification';
import Map from './components/Map';

const Location = () => {
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?ServiceKey=H%252F6w3lyHOPT0BA4p3Khpe6KfnjBBEqX8Z863KuQCjPNnVGKOMAS2pr8Mjza3G1SUTWczbsmoVpkxQdH9tlBXHw%253D%253D',
    })
      .then(function (response) {
        const dataSet = response.data;
        console.log('성공', dataSet);
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
