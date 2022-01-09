import React from 'react';
import Wrapper from 'components/Wrapper';
import Header from 'components/Header/Header.js';
import Content from 'components/Contents/Content.js';
import Footer from 'components/Footer/Footer.js';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
      <Footer />
    </Wrapper>
  );
};

export default App;