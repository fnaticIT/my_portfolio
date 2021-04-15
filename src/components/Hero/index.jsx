import React, {useState} from 'react'
import Video from '../../videos/video_2.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'
import Typed from 'react-typed';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
 const ssy={
  color: "#fff",
  fontSize: 48,
  textAlign: "center",
  fontWeight:"bold",
 }
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
      
      <Typed
      style={ssy}
            strings={[' Naman Balai']}
            typeSpeed={100}
                   
       />
        
        <HeroP>Programmer and MERN stack developer</HeroP>
        <HeroBtnWrapper>
          <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
        
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
