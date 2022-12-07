import React from 'react';
import * as S from './Main.styled';
import logo from '../../assets/images/logo.png';
import findHospital from '../../assets/images/findHospital.avif';
import findPill from '../../assets/images/findPill.avif';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <S.MainContainer>
      <div className='logoCotainer'>
        <img className='logo' alt='logo' src={logo} />
        <p>
          베어메디는 건강보험심사평가원에서 제공하는 비식별 임상 빅데이터를 기반으로 만든 메디컬 정보 서비스입니다.
          <br />
          누구나 베어메디를 활용해 메디컬 정보를 확인할 수 있습니다.{' '}
        </p>
      </div>
      <div className='imageContainer'>
        <figure class='findHospital'>
          <img src={findHospital} alt='findHosptial' />
          <figcaption>
            <h3>Hosptial & pharmacy</h3>
            <p>건강보험심사평의 정보를 통해 병원과 약국 위치정보를 알 수 있습니다.</p>
            <Link to='/hospital' class='read-more'>
              Read More
            </Link>
          </figcaption>
        </figure>
        <figure class='findPill'>
          <img src={findPill} alt='findPill' />
          <figcaption>
            <h3>PILL</h3>
            <p>건강보험심사평의 자료로 약의 세부정보를 알 수 있습니다.</p>
            <Link to='searchPill' class='read-more'>
              Read More
            </Link>
          </figcaption>
        </figure>
      </div>
    </S.MainContainer>
  );
};

export default Main;
