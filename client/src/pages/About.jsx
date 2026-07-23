import React from 'react';
import Navbar from '../components/global/navbar/Navbar';
import Footer from '../components/global/footer/Footer';
import AboutContent from '../components/about/AboutContent';



const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AboutContent></AboutContent>
      <Footer></Footer>
     
    </div>
  );
};

export default About;