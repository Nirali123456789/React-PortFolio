import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Typewriter from "typewriter-effect";
const Contact = () => {
  return (
    <div>
  <Navbar/>
  <div>
  <Typewriter
   options=
  {
    {

      autoStart:true,
      loop:true,
      delay:50,
      strings:["I am Android","React Developer.Let's have a chat."]
    }
  }
></Typewriter>
</div>
     <Footer/>
    </div>
  )
}

export default Contact
