// import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
      <ToastContainer position='bottom-right' />
    </div>
  );
};

export default App;