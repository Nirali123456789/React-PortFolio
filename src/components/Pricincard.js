import "./pricingcardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

  
const Pricincard = () => {

  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card"> 
            <h3>
                -Basic-</h3>
                <span className="bar">

                </span>
                <p className="btc">$100</p>
                <p>-3 days-</p>
                <p>-3 pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
               
                <Link to="/contact" className="button" type="button">
         PURCHASE NOW
     </Link>
                </div>

                <div className="card"> 
            <h3>
                -Premuim-</h3>
                <span className="bar">

                </span>
                <p className="btc">$300</p>
                <p>-5 days-</p>
                <p>-5 pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="button">
                    PURCHASE NOW
                </Link>
                </div>
                
                <div className="card"> 
            <h3>
                -Buisness-</h3>
                <span className="bar">

                </span>
                <p className="btc">$1000</p>
                <p>-10 days-</p>
                <p>-15 pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="button">
                    PURCHASE NOW
                </Link>
                </div>
        </div>
      
    </div>
  )
}

export default Pricincard
