import React from 'react'
import styled from 'styled-components'

import LogoImg from '../assets/logo.png'

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  padding: 10px;
  
  position: fixed;
  top: 0;
  left: 0;

  background-color: #1e2371;

  button:hover{
    cursor: pointer;
  }
`

const Content = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 60px;
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;

  i {
    margin-right: 10px;
  }
`

const SearchBar = styled.div`
  width: 450px;
  height: 60px;
  padding: 10px 20px;

  border-radius: 5px;
  background-color: #fff;

  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    
    border: none;
    outline: none;
    background-color: #fff;

    color: #9b9b9b;
    font-size: 20px;
  }

  i {
    color: #9b9b9b;
  }
`

const ShopButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  i {
    color: #1cb1dd;
  }
`

const Header = () => (
  <Wrapper>
    <Content>
      <Logo src={LogoImg} alt="Logo" />
      <Button><i class="fas fa-bars"></i> Categorias</Button>
      <SearchBar>
        <input type="text" placeholder="O que você precisa?" />
        <i class="fas fa-search"></i>
      </SearchBar>
      <Button><i class="fas fa-user-circle"></i>Entrar</Button>
      <ShopButton><i class="fas fa-shopping-bag"></i></ShopButton>
    </Content>
  </Wrapper>
)

export default Header;