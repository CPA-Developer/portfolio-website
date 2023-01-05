import React from 'react';
import {Section} from './InfoElements';
import { Row, Col } from 'react-bootstrap';

const InfoSection = () => {
  return (
  
      <Section id='about'>
      <div data-aos='fade-up'>
        <div className='section-title'>
          <h2>About</h2>
          <div className='section-line'></div>
        </div>
        
        <div className='section-content'>
            <h3 className='mt-md-0 mt-3'>Front-end Developer.</h3>
           <p>         'Hello! My name is Sebastian. I am currently in Computer Programmer Analyst program at St. Lawrence College and I am graduating at the end of April 2022. I am passionate about things related to technology, especially the Web Development.',
    'I would love the opportunity to learn and work alongside other like-minded professionals who are all collaborating to build the best website and software possible that meets the ever-changing needs of the end-user.',  </p>

    </div>
           
         
      </div>
    </Section>
    
  );
}

export default InfoSection;
