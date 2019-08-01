import {WithTranslation, withTranslation} from "react-i18next";
import React from "react";
import styled from "styled-components";
import withAnimationTrigger from "../utils/withAnimationTrigger";
import SlideInBottom from "../animations/SlideInBottom";
import media from "../utils/media";
import Expand from "../animations/Expand";
import {ProjectCard} from "./projects/components";
import {ProjectHeader} from "./projects/ProjectLayout";
import {Divider, Typography} from "@material-ui/core";

const Wrapper = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
  box-sizing: border-box;
  
  padding: 35px 0;
  
  // background: #e7e7e7; // #39373A;
  background: url(bg/bg.png) repeat;
`;

const HeaderRuleExpand = Expand('30%', 1);

const Header = withAnimationTrigger(styled.div<{visible: boolean}>`
  margin: 0 auto;
  width: 70%;
  height: 5rem;
  position: relative;
  
  text-align: center;
  line-height: 5rem;
  
  font-size: 4rem;
  color: black;
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
  
  ${media.lessThan('huge')`
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

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  
  padding: 0 100px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  width: 100%;
`;

interface TechBannerOptions {
    logo: string;
    name: string;
}

const TechBanner: React.FC<TechBannerOptions> = ({logo, name}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 0 0'}}>
            <img style={{height: '100px', marginBottom: '10px'}} src={logo} alt={name} />
            {name}
        </div>
    );
};


const Skills: React.FC<WithTranslation> = ({t}) => {
    return (
        <Wrapper>
            <Header>{t('skills.header')}</Header>
            <Content>
                <ProjectCard style={{padding: '20px'}}>
                    <Typography variant={'h4'} style={{color: '#795548', margin: '2rem'}}>Frontend</Typography>
                    <Divider style={{margin: '-5px 0 5px 0', marginBottom: '20px'}}/>
                    <Row>
                        <TechBanner logo={'icons/html5.svg'} name={'HTML5'}/>
                    </Row>
                </ProjectCard>
            </Content>
        </Wrapper>
    );
};

export default withTranslation()(Skills);
