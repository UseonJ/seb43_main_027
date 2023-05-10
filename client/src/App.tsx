import React, { useState } from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './layouts/Header/Header';
import Nav from './layouts/Nav/Nav';
import Footer from './layouts/Footer/Footer';

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Header setShow={setShow} show={show} />
      <Nav show={show} setShow={setShow} />
      <Footer />
    </>
  );
};

export default App;
