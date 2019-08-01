import {useEffect, useState} from "react";
import styled from "styled-components";
import  React from "react";

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import SocialLink from "./SocialLink";

import StaggerInView from "../utils/StaggerInView";
import FlipInX from "../animations/FlipInX";
import media from "../utils/media";



const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
`;

const Background = styled.div`
  background: url(bg/conifer-dawn-daylight.jpg);
  background-size: cover;
  background-position: center center;
  
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
`;

const ContentAlign = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 2;
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
  font-size: 7rem;
  margin-bottom: 10px;
  
  ${media.between('large', 'huge')`
    font-size: 6rem;
    margin-bottom: 0;
  `}
  
  ${media.between('medium', 'large')`
    font-size: 5rem;
    margin-bottom: 0;
  `}
  
  ${media.lessThan('medium')`
    font-size: 4rem;
    margin-bottom: 0;
  `}
`;

const TextSpinner = styled.div`
    flex: 1 1 0;
    box-sizing: border-box;
    font-size: 4rem;
    
    span {
      color: #9d56ff;
    }
    
    ${media.between('large', 'huge')`
        font-size: 3.5rem;
    `}
    
    ${media.between('medium', 'large')`
        font-size: 3rem;
    `}
    
    ${media.lessThan('medium')`
        font-size: 2.7rem;
    `}
`;

const EmptyDiv = styled.div`
  height: 46px;
  
  ${media.between('large', 'huge')`
    height: 43.33px;
  `}
  
  ${media.between('medium', 'large')`
    height: 34px;
  `}
  
  ${media.lessThan('medium')`
    height: 31px;
  `}
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  
  ${media.between('medium', 'large')`
    margin-top: 85px;
  `}
`;

const SocialLinkPadding = styled.div`
  display: flex;
  padding: 0 10px;
  background: rgba(0,0,0,0.6);
  z-index: 3;
`;


const LandingPage: React.FC = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(1);
    }, [count]);

    return (
            <Wrapper id={'home'}>
                <Background />
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
                                <SocialLink title={'LinkedIn'} icon={faLinkedin} link={'https://www.linkedin.com/in/benedict-becker-9a20b018b/'}/>
                                <SocialLink title={'Mail'} icon={faEnvelope}/>
                                <SocialLink title={'Resume'} icon={faNewspaper} link={'https://drive.google.com/file/d/1u9picbnQzrc6-eVvyWK0wkvSPHFIV_Ll/view?usp=sharing'}/>
                            </StaggerInView>
                        </SocialLinkPadding>

                </SocialLinks>

            </Wrapper>
    );
};

export default LandingPage;
