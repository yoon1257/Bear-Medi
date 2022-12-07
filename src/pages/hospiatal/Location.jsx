import React from 'react';
import styled from 'styled-components';
import Classification from './components/Classification';
import Map from './components/Map';

const Location = () => {
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
