import React from "react";
import styled, {css} from "styled-components";

import {WithTranslation, withTranslation} from "react-i18next";
import DSLViz from "./projects/DSLViz";
import {Typography} from "@material-ui/core";
import DeckHistoryTracker from "./projects/DeckHistoryTracker";
import Unnamed from "./projects/Unnamed";
import SlideInBottom from "../animations/SlideInBottom";
import Expand from "../animations/Expand";
import SlideInRight from "../animations/SlideInRight";
import StaggerInView from "../utils/StaggerInView";
import ZoomIn from "../animations/ZoomIn";
import withAnimationTrigger from "../utils/withAnimationTrigger";
import withAnimation from "../utils/withAnimation";
import MensaApp from "./projects/MensaApp";
import media from "../utils/media";

const HeaderRuleExpand = Expand('30%', 1);


const Header = withAnimationTrigger(styled.div<{visible: boolean}>`
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
  
  ${media.lessThan('large')`
    font-size: 3.4rem;
    
    :before, :after {
        border-bottom: 4.25px solid rgba(0,0,0,0.25);
    }
  `}
  
  ${media.lessThan('medium')`
    width: 90%;
    font-size: 2.7rem;
  `}
`);

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

const IntroText = withAnimation(styled(Typography).attrs(props => ({paragraph: true, variant: 'subtitle1'}))`
  width: 50%;
  text-align: center;
  align-self: center;
  
  color: white;
  opacity: 0;
  
  
  ${media.between('medium', 'large')`
    width: 60%;
  `}
  
  ${media.lessThan('medium')`
    width: 80%;
  `}
`, SlideInRight(0));

const cardItemStyle = css`
    margin: 30px;
`;


const Projects: React.FC<WithTranslation> = ({t}) => {
    return (
        <>
            <Wrapper>
                <Header>{t('header.projects')}</Header>
                <IntroText>{t('projects.about')}</IntroText>
                <Content>
                    <StaggerInView itemStyle={cardItemStyle} animation={ZoomIn} stagger={0.5}>
                        <DSLViz />
                        <DeckHistoryTracker />
                        <Unnamed />
                        <MensaApp />
                    </StaggerInView>
                </Content>
            </Wrapper>
        </>
    );
};

export default withTranslation()(Projects);
