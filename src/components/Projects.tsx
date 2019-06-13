import React, {useState} from "react";
import styled from "styled-components";

import Fade from 'react-reveal/Fade';
import {WithTranslation, withTranslation} from "react-i18next";
import DSLViz from "./projects/DSLViz";
import {Typography} from "@material-ui/core";
import DeckHistoryTracker from "./projects/DeckHistoryTracker";
import Unnamed from "./projects/Unnamed";
import {InView} from "react-intersection-observer";
import SlideInBottom from "../animations/SlideInBottom";
import Expand from "../animations/Expand";
import SlideInRight from "../animations/SlideInRight";

const HeaderRuleExpand = Expand('30%', 1);

const Header = styled.div<{visible: boolean}>`
  margin: 0 auto;
  width: 70%;
  height: 5rem;
  position: relative;
  
  text-align: center;
  line-height: 5rem;
  
  font-size: 4rem;
  color: white;
  text-transform: uppercase;
  align-self: center;
  
  opacity: 0;
  
  margin-bottom: 10px;
  
  ${props => props.visible ? SlideInBottom(0) : ''}
  
  :before, :after {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    display: block;
    border-bottom: 5px solid rgba(0,0,0,0.25);
    ${props => props.visible ? HeaderRuleExpand : ''}
  }
  
  :after {
    right: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
  box-sizing: border-box;
  
  padding: 70px 0;
  
  background: #39373A;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  
  padding: 0 100px;
`;

const IntroText = styled(Typography)<{visible: boolean}>`
  width: 50%;
  text-align: center;
  align-self: center;
  
  color: white;
  opacity: 0;
  
  ${props => props.visible ? SlideInRight(0) : ''}
`;





const Projects: React.FC<WithTranslation> = ({t}) => {
    return (
        <>
            <Wrapper>
                <InView style={{width: '100%', textAlign: 'center'}} rootMargin={'-20%'} triggerOnce={true}>
                    {({inView, ref}) => (<Header visible={inView} ref={ref}>{t('header.projects')}</Header>)}
                </InView>
                <InView style={{width: '100%', textAlign: 'center'}} rootMargin={'-20%'} triggerOnce={true}>
                    {({inView, ref}) => (<IntroText visible={inView} ref={ref} variant={'subtitle1'}>{t('projects.about')}</IntroText>)}
                </InView>
                <Content>
                    <Fade bottom>

                        <DSLViz />
                        <DeckHistoryTracker />
                        <Unnamed />
                    </Fade>
                </Content>
            </Wrapper>
        </>
    );
};

export default withTranslation()(Projects);
