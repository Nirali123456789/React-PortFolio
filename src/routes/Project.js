import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Pricincard from '../components/Pricincard';
import WorkCard from '../components/WorkCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg2 heading ="PROJECTS." text="Some of my most recent works"/>
     <Work/>
     
     <Pricincard/>
    
     <Footer/>
    </div>
  )
}

export default Project
