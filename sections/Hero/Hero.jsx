import React from 'react'
import ReactDOM from 'react-dom'
import Image from "next/image";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faHouse } from '@fortawesome/free-solid-svg-icons'

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
  BigContainer,
  ContainerElements,
  ContainerImage,
  Element,
  LogoContainer,
  ParagraphHeader,
  ParagraphContainer,
  ParagraphText, 
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {
  return (
    <StyledContainer className="main" {...props}>
      <StyledTitle className="text-first">{title}</StyledTitle>
      <StyledDescription className="text-second">{description}</StyledDescription>

      <BigContainer className="big-container">
        <StyledImageContainer className="containerImage">
         <Image className="big-container__img" 
            width={250}
            height={400}
            style={{ height: 'auto', maxWidth:'250px', 
                  width: '100%',display: 'block',
                  position: 'static !important' 
            }}
            src={image.src}
            alt={image.alt} />
        </StyledImageContainer>

        <ContainerElements className="big-container__els">
          <Element className="big-container__element" style={{marginBottom: "30px", marginRight:'30px'}}>
            <LogoContainer className="logo">
              <FontAwesomeIcon className="faIcon" icon={faEnvelope} style={{ height: '40px', width: '40px' }}/>
            </LogoContainer>
            <ParagraphContainer className="paragraph-wrapper">
              <Link href="/brief" className="paragraph-header">Brief</Link>
              <ParagraphText className="paragraph-text">Lorem Ipsum is simply dummy text of the printing </ParagraphText>  
            </ParagraphContainer>
          </Element>
          <Element className="big-container__element" style={{marginBottom: "30px", marginRight:'15px'}}>
            <LogoContainer className="logo">
              <FontAwesomeIcon className="faIcon" icon={faPhone} style={{ height: '40px', width: '40px' }}/>
            </LogoContainer>
            <ParagraphContainer className="paragraph-wrapper">
              <ParagraphHeader className="paragraph-header">Search</ParagraphHeader>
              <ParagraphText className="paragraph-text">Lorem Ipsum is simply dummy text of the printing </ParagraphText>  
            </ParagraphContainer>
          </Element>
          <Element className="big-container__element">
            <LogoContainer className="logo">
              <FontAwesomeIcon className="faIcon" icon={faHouse} style={{ height: '40px', width: '40px' }}/>
            </LogoContainer>
            <ParagraphContainer className="paragraph-wrapper">
              <ParagraphHeader className="paragraph-header">Pitch</ParagraphHeader>
              <ParagraphText className="paragraph-text">Lorem Ipsum is simply dummy text of the printing </ParagraphText>  
            </ParagraphContainer>
          </Element>
        </ContainerElements>   
      </BigContainer>
    </StyledContainer>
  );
};
