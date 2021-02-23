import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  p {
    height: 40px;
    margin-bottom: 20px;
    line-height: 40px;
    background-color: #de8e85;
    text-align: center;
    font-size: 18px;
  }

  a {
    font-weight: 700;
    text-decoration: underline;
  }

  hr {
    border-top: 2px solid #de8e85;
    margin-bottom: 20px;
  }
`

const Footer = () => (
  <Wrapper>
    <p>Para mais informações sobre o combate à caspa, acesse o <a href="https://meza.digital/" target="blank">Dermaclub</a></p>
    <hr/>
  </Wrapper>
)

export default Footer;