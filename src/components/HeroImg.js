import "./HeroimageStyles.css"

import React from 'react'
import IntroImg from "../assests/nirali.jpg"
import { Link } from "react-router-dom";
import { useTypingEffect } from "./useTypingEffect";




const HeroImg = () => {

  const text = useTypingEffect("Hi,I am Nirali ...React Developer+Android App Developer..", 50)
  return (
    <div className="myhero">

      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />


      </div>
      <div className="content">
        <p>
          {text}
        </p>


        <div>
          <Link to="/project" className="btn"> Projects</Link>
          <Link to="/contact" className="btn btn-light"> Contact</Link>
        </div>
      </div>

    </div>
  )

};



export default HeroImg
