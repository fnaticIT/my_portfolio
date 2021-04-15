import React from 'react'
import Icon1 from '../../images/secret.jpg'
import Icon2 from '../../images/mqdefault.jpg'
import Icon3 from '../../images/download.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'
import {Link} from 'react-router-dom';
const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
      <a href='https://intense-dusk-61961.herokuapp.com/' style={{textDecoration:"none"}}>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Secreto Website</ServicesH2>
          <ServicesP>Share your secrets with the world !.</ServicesP>
        </ServicesCard>
        </a>
        <a href="https://snakef.herokuapp.com/" style={{textDecoration:"none"}}>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Snake and ladder</ServicesH2>
          <ServicesP>Our very own snake and ladder game but with a twist of reverse linked list and react js</ServicesP>
        </ServicesCard>
        </a>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Upcoming</ServicesH2>
          <ServicesP>Too drop your suggestions for upcoming projects</ServicesP>
        </ServicesCard>
  
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
