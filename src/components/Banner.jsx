import React from 'react';
import styled from 'styled-components';

import BannerImg from '../assets/banner-img.png'

const Wrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 350px;
  background-color: #de8e85;
  display: flex;

  img {
    height: 100%;
    width: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;

    h1 {
      font-size: 30px;
      margin-bottom: 20px;
    }

    p {
      font-size: 20px;
      line-height: 30px;
      max-width: 600px;
    }
  }
`
const Banner = () => ( 
      <Wrapper>
          <img src={BannerImg} alt="modelo" />
          <div>
            <h1>Fortalecimento</h1>
            <p>Com suas fórmulas especiais, os shampoos dermocosméticos ajudam a fortalecer o cabelo, combater a queda e tratar a tão indesejada caspa.</p>
          </div>
      </Wrapper>
)

export default Banner;