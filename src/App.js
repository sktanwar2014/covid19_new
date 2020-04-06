import React from 'react';
import './App.css';

import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Body from './Components/Body.js'


function App() {
  return (
    <div>
      {/* <div id="preloader">
        <div class="colorlib-load"></div>
      </div> */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
