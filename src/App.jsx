import React from 'react';

import GlobalStyle from './theme/GlobalStyle.jsx';

import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}

export default App;
