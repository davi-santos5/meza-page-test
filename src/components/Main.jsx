import React from 'react'
import styled from 'styled-components'

import CardImg from '../assets/card-img.png'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto; 

  h2 {
    color: #de8e85;
    margin-bottom: 20px;
  }

  p{
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #a0a0a0;
    margin-bottom: 40px;
  }
`

const ViewButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
`

const MainBtn = styled.button`
  width: 200px;
  height: 40px;
  margin-right: 20px;

  border: none;
  background-color: #fff;

  font-size: 18px;
  color: #9b9b9b;

  transition: 0.2s;

  i {
     color: #9b9b9b;
     margin-right: 5px;
  }

  :hover {
    cursor: pointer;
    opacity: 0.8;
    transform: scale(0.98)
  }
`

const CardsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`
const Card = styled.div`
  background-color: #fff;
  padding: 10px;
  grid-column: ${props => props.spanColumns ? "span 2" : "auto"} ;

  h3 {
    color: #de8e85;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  p {
     font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #9b9b9b;
  }
`

const ImageCard = styled.div`
  grid-row: span 2;
  
  button {
    width: 100%;
    height: 60px;
    padding: 10px;

    background-color: #de8e85;
    border: none;
    font-size: 20px;
    text-align: left;
    transition: 0.2s;
  }


  i {
     margin-left: 8px;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: calc(100% - 60px);
  }
`

const Main = () => (
  <Wrapper>
    <ViewButtons>
      <MainBtn><i class="fas fa-th"></i>Quantidade</MainBtn>
      <MainBtn><i class="fas fa-exchange-alt"></i>Ordenar</MainBtn>
    </ViewButtons>
    <h2>SHAMPOOS E DERMOCOSMÉTICOS</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, eaque facilis expedita, officia velit ex repellat asperiores adipisci temporibus eos illum voluptas rerum. Minima rerum, sint optio in laboriosam eaque?</p>
    <CardsGrid>
      <Card>
        <h3>COMO ESCOLHER O MELHOR SHAMPOO?</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis accusamus quo error sequi velit dignissimos, numquam odit perspiciatis fuga obcaecati quas ad cupiditate quia ratione fugiat architecto atque laboriosam? Obcaecati.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci esse voluptatem a consectetur quas. Laborum perspiciatis saepe dicta, vel praesentium, modi minus voluptate eaque tenetur, unde doloribus consequatur eius nobis.
        </p>
      </Card>
      <ImageCard>
        <button>
          CONHEÇA NOSSOS <strong>SHAMPOOS</strong><i class="fas fa-caret-right"></i>
        </button>
        <img src={CardImg} alt="modelo"/>
      </ImageCard>
      <Card>
        <h3>QUEDA DE CABELO NUNCA MAIS</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis accusamus quo error sequi velit dignissimos, numquam odit perspiciatis fuga obcaecati quas ad cupiditate quia ratione fugiat architecto atque laboriosam? Obcaecati.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci esse voluptatem a consectetur quas. Laborum perspiciatis saepe dicta, vel praesentium, modi minus voluptate eaque tenetur, unde doloribus consequatur eius nobis.
        </p>
      </Card>
      <Card spanColumns={true}>
        <h3>ANTICASPA</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis accusamus quo error sequi velit dignissimos, numquam odit perspiciatis fuga obcaecati quas ad cupiditate quia ratione fugiat architecto atque laboriosam? Obcaecati.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci esse voluptatem a consectetur quas. Laborum perspiciatis saepe dicta, vel praesentium, modi minus voluptate eaque tenetur, unde doloribus consequatur eius nobis.
        </p>
      </Card>
    </CardsGrid>
  </Wrapper>
)

export default Main;
