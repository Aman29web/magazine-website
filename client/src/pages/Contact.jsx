import React from 'react';
import Navbar from '../components/global/navbar/Navbar';
import Footer from '../components/global/footer/Footer';
import ContactContent from '../components/contact/ContactContent';



const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ContactContent></ContactContent>
      <Footer></Footer>
     
    </div>
  );
};

export default Contact;