// import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Technologies from './components/Technologies';


const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <br />
      <br />
      <Technologies/>
      <br />
      <br />
       <div className="divider"></div>
      <Footer/>
    </div>
  );
};

export default App;