import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  &.main{
    width: 60%;
    margin:auto;
    margin-top:80px;
    display:block;

    @media only screen and (max-width: 1024px) {
  
      & {
        margin-top:20px;
        width:80%;
      }
    }
  }
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  &.text-first {
     text-align:center;
     font-family: Poppins;
     font-weight: 600;

     @media only screen and (max-width: 1024px) {
  
       & {
         font-size:24px;
       }
     }

     @media only screen and (max-width: 768px) {
  
       & {
         font-size:20px;
       }
     }
   }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  &.text-second {
      text-align:center;
      font-family: Poppins;

      @media only screen and (max-width: 1024px) {
  
       & {
         font-size:16px;
       }
      }

      @media only screen and (max-width: 768px) {
  
       & {
         font-size:14px;
       }
     }
   }   
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  &.containerImage{
    width:50%;

    @media only screen and (max-width: 1024px) {
  
      & {
        width:100%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;


export const BigContainer = styled.div`
  &.big-container{
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content: space-between;
    align-items:stretch;
    background-color: white;
    margin-top:30px;

    @media only screen and (max-width: 1024px) {
  
      & {
        margin-top:20px;
        flex-direction:column;
      }
    }
  }
`;

export const ContainerElements = styled.div`
  &.big-container__els{
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content: space-between;
    align-items:stretch;
    align-content: space-between;
    width:50%;
    margin:15px 0px;

    @media only screen and (max-width: 1024px) {
  
      & {
        width:100%;
      }
    }
  }
`;

export const Element  = styled.div`
  &.big-container__element{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items:stretch;
    background-color: #f7f1f1;
    border-radius:6px;
    height:90px;
    padding:10px 30px;
    transition: border 0.2s;
    border: 2px solid transparent;

    &:hover {
      border: 2px solid #0071ff;
    }

    &:hover .paragraph-header {
      color: blue;
      text-decoration: underline;
    }

    @media only screen and (max-width: 1024px) {
  
      & {
        padding:10px 20px;
      }
    }
  }
`;

export const LogoContainer  = styled.div`
  &.logo{
    width:90px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px 30px 10px 0px;

    @media only screen and (max-width: 1024px) {
  
      & {
        padding:10px 20px 10px 0px;
      }
    }
  }
`;

export const ParagraphContainer  = styled.div`
  &.paragraph-wrapper{
    width:100%;

    @media only screen and (max-width: 1024px) {
  
      & {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
      }
    }
  }
`;

export const ParagraphHeader  = styled.h2`
  &.paragraph-header{
    width:100%;
    font-family: Poppins;
    font-weight: 600;
    font-size:17px;
    margin:0;

    @media only screen and (max-width: 1024px) {
  
      & {
         font-size:15px;
      }
    }
  }
`;

export const ParagraphText  = styled.p`
  &.paragraph-text{
    width:100%;
    font-size:14px;
    margin:0;
  }
`;

