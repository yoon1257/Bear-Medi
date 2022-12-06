import styled from 'styled-components';
import { pastelBlue, pink } from '../../styles/theme';

export const MainContainer = styled.div`
  background-color: #efeff1;
  height: 100vh;
  .logoCotainer {
    text-align: center;
    margin-bottom: 30px;
    color: #676a6c;
    .logo {
      width: 300px;
    }
  }

  .imageContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  figure.findHospital {
    font-family: 'Raleway', Arial, sans-serif;
    color: #fff;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin: 10px;
    max-width: 40%;
    max-height: 33rem;
    width: 100%;
    text-align: left;
    background-color: ${pink};
    font-size: 16px;
    -webkit-perspective: 50em;
    perspective: 50em;
  }
  figure.findHospital * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }
  figure.findHospital img {
    opacity: 1;
    width: 100%;
    -webkit-transform-origin: 50% 0%;
    -ms-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
  }
  figure.findHospital figcaption {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    z-index: 1;
    opacity: 0;
    padding: 20px 30px;
  }
  figure.findHospital h3,
  figure.findHospital p {
    line-height: 1.5em;
  }
  figure.findHospital h3 {
    margin: 0;
    font-weight: 800;
    text-transform: uppercase;
  }
  figure.findHospital p {
    font-size: 0.8em;
    font-weight: 500;
    margin: 0 0 15px;
  }
  figure.findHospital .read-more {
    border: 2px solid #ffffff;
    padding: 0.5em 1em;
    font-size: 0.8em;
    text-decoration: none;
    color: #ffffff;
    display: inline-block;
  }
  figure.findHospital .read-more:hover {
    background-color: #ffffff;
    color: #000000;
  }
  figure.findHospital:hover img,
  figure.findHospital.hover img {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
  figure.findHospital:hover figcaption,
  figure.findHospital.hover figcaption {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  figure.findPill {
    font-family: 'Raleway', Arial, sans-serif;
    color: #fff;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin: 10px;
    max-width: 40%;
    max-height: 390px;
    width: 100%;
    text-align: left;
    background-color: ${pastelBlue};
    font-size: 16px;
    -webkit-perspective: 50em;
    perspective: 50em;
  }
  figure.findPill * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }
  figure.findPill img {
    opacity: 1;
    width: 100%;
    -webkit-transform-origin: 50% 0%;
    -ms-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
  }
  figure.findPill figcaption {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    z-index: 1;
    opacity: 0;
    padding: 20px 30px;
  }
  figure.findPill h3,
  figure.findPill p {
    line-height: 1.5em;
  }
  figure.findPill h3 {
    margin: 0;
    font-weight: 800;
    text-transform: uppercase;
  }
  figure.findPill p {
    font-size: 0.8em;
    font-weight: 500;
    margin: 0 0 15px;
  }
  figure.findPill .read-more {
    border: 2px solid #ffffff;
    padding: 0.5em 1em;
    font-size: 0.8em;
    text-decoration: none;
    color: #ffffff;
    display: inline-block;
  }
  figure.findPill .read-more:hover {
    background-color: #ffffff;
    color: #000000;
  }
  figure.findPill:hover img,
  figure.findPill.hover img {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
  figure.findPill:hover figcaption,
  figure.findPill.hover figcaption {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
`;
