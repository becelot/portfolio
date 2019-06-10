import {useEffect, useState} from "react";
import styled from "styled-components";
import  React from "react";

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import {SocialLink} from "./SocialLink";

const { Parallax } = require('react-parallax');



const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4));
  background-size: cover;
  background-position: center center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
`;

const ContentAlign = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  color: white;
  justify-content: center;
  text-align: center;
  background: rgba(0,0,0,0.6);
`;

const NameText = styled.span`
  flex: 1 1 0;
  font-size: 10rem;
  margin-bottom: 20px;
  
  @media only screen and (max-width: 880px), only screen and (max-height: 550px){
    font-size: 4rem;
    margin-bottom: 10px;
  }
`;

const TextSpinner = styled.div`
    flex: 1 1 0;
    box-sizing: border-box;
    font-size: 5rem;
    
    span {
      color: #9d56ff;
    }
    
  @media only screen and (max-width: 880px), only screen and (max-height: 550px) {
    font-size: 2rem;
  }
`;

const EmptyDiv = styled.div`
  height: 57px;
  @media only screen and (max-width: 880px), only screen and (max-height: 550px) {
    height: 23px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

const SocialLinkPadding = styled.div`
  display: flex;
  padding: 0 10px;
  background: rgba(0,0,0,0.6);
`;


const LandingPage: React.FC = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(1);
    }, [count]);

    return (
        <Parallax bgImage={'bg/conifer-dawn-daylight.webp'} strength={700}>
            <Wrapper id={'home'}>
                <ContentAlign>
                    <Content>
                        <NameText>Benedict Becker</NameText>
                        <TextSpinner>
                            {count ? (
                                <Typist stdTypingDelay={0} avgTypingDelay={100} startDelay={200}
                                        onTypingDone={() => setCount(0)}>
                                    Fullstack Developer
                                    <Typist.Delay ms={4000}/>
                                    <Typist.Backspace count={19} delay={200}/>
                                    <Typist.Delay ms={1000}/>
                                    .NET Developer
                                    <Typist.Delay ms={4000}/>
                                    <Typist.Backspace count={14} delay={200}/>
                                    <Typist.Delay ms={1000}/>
                                    Android/iOS Developer
                                    <Typist.Delay ms={4000}/>
                                    <Typist.Backspace count={21} delay={200}/>
                                    <Typist.Delay ms={1000}/>
                                </Typist>
                            ) : (
                                <EmptyDiv/>
                            )}

                        </TextSpinner>
                    </Content>
                </ContentAlign>
                <SocialLinks>
                    <SocialLinkPadding>
                        <SocialLink title={'Github'} icon={faGithub} link={'https://github.com/becelot'}/>
                        <SocialLink title={'LinkedIn'} icon={faLinkedin}/>
                        <SocialLink title={'Mail'} icon={faEnvelope}/>
                        <SocialLink title={'Resume'} icon={faNewspaper}/>
                    </SocialLinkPadding>
                </SocialLinks>
            </Wrapper>
        </Parallax>
    );
};

export default LandingPage;
