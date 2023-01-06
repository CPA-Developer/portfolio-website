import React from 'react';
import {Section} from './InfoElements';


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
           <p>         'Hello! my name is Sebastian. I am a graduate of the esteemed Computer Programmer Analyst
            program at St. Lawrence College, where I developed a deep passion for all things technology, particularly web development.
             I am eager to continue learning and growing in this field, and what better way to do so than by joining a team of like-minded
              professionals who are dedicated to building the best websites and software possible to meet the constantly
               evolving needs of the end-user. Whether working independently or as part of a team, I am committed to delivering top-quality
                products that exceed the expectations of my clients.I am excited at the prospect of collaborating with such a talented group of individuals
                and contributing to the creation of innovative and user-friendly technology.'  </p>

    </div>
           
         
      </div>
    </Section>
    
  );
}

export default InfoSection;
