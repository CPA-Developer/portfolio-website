import React, {useState} from 'react';
import { HeroContainer, HeroBG, VideoBG, 
    HeroContent, 
    HeroH1, 
    HeroP,
    ArrowForward,
    ArrowRight,
    HeroBtnWrapper 
} from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import {TypeAnimation} from 'react-type-animation';


const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover =() =>{
        setHover(!hover)
    };

  return (
    <HeroContainer id='home'>
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} playsInline type='video/mp4'/>
      </HeroBG>
      <HeroContent>
        <HeroH1>
        <p>
          &lt;h1&gt;
          <TypeAnimation
            cursor={true}
            sequence={[
              'Hi I am Subin Sebastian',
              1000,
              'I am a Application developer.',
              1000,
              '',
            ]}
            speed={35}
            wrapper='b'
            repeat={Infinity}
          />
          &lt;/h1&gt;
        </p>
        </HeroH1>
        <HeroP>
        Highly skilled and dedicated application developer with a passion for creating simple, modern applications that enhance the user experience. 
        </HeroP>
        <HeroBtnWrapper>
            <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark="true"
            spy={true}
            duration={500}
            exact="true"
            offset={-80}>
                Know me more {hover? <ArrowForward />:<ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
