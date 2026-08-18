import React from 'react';
import Navbar from '../components/global/navbar/Navbar';
import Footer from '../components/global/footer/Footer';
import AboutContent from '../components/about/AboutContent';
dconst About = () => {

  useEffect(() => {
    // SEO Title
    document.title = 'About The Leadership Gazette | Global Leadership & Business';
metaDescription.setAttribute(
  'content',
  'Discover The Leadership Gazette, a global leadership platform highlighting MENA leaders, business excellence, HR innovation, and inspiring leadership stories.'
);

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
