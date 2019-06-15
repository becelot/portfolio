import {useEffect, useState} from "react";
import styled from "styled-components";
import  React from "react";

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import SocialLink from "./SocialLink";

import { Parallax } from 'react-parallax';
import StaggerInView from "../utils/StaggerInView";
import FlipInX from "../animations/FlipInX";
import media from "../utils/media";



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
  font-size: 9rem;
  margin-bottom: 10px;
  
  ${media.between('medium', 'huge')`
    font-size: 7rem;
    margin-bottom: 0;
  `}
  
  ${media.lessThan('medium')`
    font-size: 5rem;
  `}
`;

const TextSpinner = styled.div`
    flex: 1 1 0;
    box-sizing: border-box;
    font-size: 5rem;
    
    span {
      color: #9d56ff;
    }
    
    ${media.between('medium', 'huge')`
        font-size: 4rem;
    `}
    
    ${media.lessThan('medium')`
        font-size: 3rem;
    `}
`;

const EmptyDiv = styled.div`
  height: 57px;
  
  ${media.between('medium', 'huge')`
    height: 46px;
  `}
  
  ${media.lessThan('medium')`
    height: 34px;
  `}
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
        <Parallax bgImage={'bg/conifer-dawn-daylight.jpg'} strength={700}>
            <Wrapper id={'home'}>
                <ContentAlign>

                    <Content>
                        <NameText>Benedict Becker</NameText>
                        <TextSpinner>
                            {count ? (
                                <Typist stdTypingDelay={0} avgTypingDelay={100}
                                        onTypingDone={() => setCount(0)}>
                                    <Typist.Delay ms={2000}/>
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
                            <StaggerInView animation={FlipInX} stagger={0.5}>
                                <SocialLink title={'Github'} icon={faGithub} link={'https://github.com/becelot'}/>
                                <SocialLink title={'LinkedIn'} icon={faLinkedin}/>
                                <SocialLink title={'Mail'} icon={faEnvelope}/>
                                <SocialLink title={'Resume'} icon={faNewspaper}/>
                            </StaggerInView>
                        </SocialLinkPadding>

                </SocialLinks>
            </Wrapper>
        </Parallax>
    );
};

export default LandingPage;
