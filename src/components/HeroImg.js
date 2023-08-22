import "./HeroimageStyles.css"

import React from 'react'
import IntroImg from "../assests/img10.jpg"
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="myhero">

<div className="mask">
<img className="into-img" src={IntroImg} alt="IntroImg"/>


</div>
<div className="content">
<p>
    Hi,I am Freelancer...React Developer..
    
  </p>
 
 
  <div>
<Link to ="/project" className="btn"> Projects</Link>
<Link to ="/contact" className="btn btn-light"> Contact</Link>
</div>
</div>

    </div>
  )
  
};



export default HeroImg
