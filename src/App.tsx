// import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from 'react';


const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <br />
      <br />

      <Suspense fallback={
        <div className='text-2xl text-center font-bold'>
          <h1>Loading...</h1>
          <h1> Please wait</h1>
        </div>
      }>
        <Technologies/>
      </Suspense>
      
      <br />
      <br />
       <div className="divider"></div>
      <Footer/>
      <ToastContainer position='bottom-right' />
    </div>
  );
};

export default App;