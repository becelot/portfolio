import {WithTranslation, withTranslation} from "react-i18next";
import React from "react";
import styled, {css} from "styled-components";
import withAnimationTrigger from "../utils/withAnimationTrigger";
import SlideInBottom from "../animations/SlideInBottom";
import media from "../utils/media";
import Expand from "../animations/Expand";
import {ProjectHeader} from "./projects/ProjectLayout";
import {Card, Divider, Typography, withStyles} from "@material-ui/core";
import SlideInRight from "../animations/SlideInRight";
import StaggerInView from "../utils/StaggerInView";

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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 13%', marginBottom: '25px', minWidth: '140px'}}>
            <img style={{height: '100px', marginBottom: '10px'}} src={logo} alt={name} />
            {name}
        </div>
    );
};

export const ProjectCard = withStyles({
    root: {
        margin: '10px',
        width: '80vw',
        maxWidth: '1280px',
        height: '100%',
        '@media (max-width: 768px)': {
            maxWidth: '95vw',
            minWidth: '95vw'
        }
    }
})(Card);

const cardItemStyle = css`
    margin: 30px;
`;

const Skills: React.FC<WithTranslation> = ({t}) => {
    return (
        <Wrapper>
            <Header>{t('skills.header')}</Header>
            <Content>
                <StaggerInView itemStyle={cardItemStyle} animation={SlideInRight} stagger={0.2}>
                <ProjectCard style={{padding: '20px 20px 0 20px'}}>
                    <Typography variant={'h4'} style={{color: '#795548', margin: '2rem'}}>{t('skills.appdev')}</Typography>
                    <Divider style={{margin: '-5px 0 5px 0', marginBottom: '20px'}}/>
                    <Row>
                        <TechBanner logo={'icons/CSharp.svg'} name={'C#'}/>
                        <TechBanner logo={'icons/wpf.png'} name={'WPF'}/>
                        <TechBanner logo={'icons/java.svg'} name={'Java'}/>
                        <TechBanner logo={'icons/android.svg'} name={'Android'}/>
                        <TechBanner logo={'icons/python.svg'} name={'Python'}/>
                        <TechBanner logo={'icons/delphi.jpg'} name={'Delphi'}/>
                        <TechBanner logo={'icons/haskell.png'} name={'Haskell'}/>
                        <TechBanner logo={'icons/Matlab.png'} name={'MATLAB'}/>
                        <TechBanner logo={'icons/R.svg'} name={'R'}/>
                    </Row>
                </ProjectCard>
                <ProjectCard style={{padding: '20px 20px 0 20px'}}>
                    <Typography variant={'h4'} style={{color: '#795548', margin: '2rem'}}>{t('skills.webtech')}</Typography>
                    <Divider style={{margin: '-5px 0 5px 0', marginBottom: '20px'}}/>
                    <Row>
                        <TechBanner logo={'icons/html5.svg'} name={'HTML5'}/>
                        <TechBanner logo={'icons/css3.svg'} name={'CSS3'}/>
                        <TechBanner logo={'icons/sass.svg'} name={'Sass'}/>
                        <TechBanner logo={'icons/javascript.png'} name={'JavaScript'}/>
                        <TechBanner logo={'icons/ts.png'} name={'TypeScript'}/>
                        <TechBanner logo={'icons/angular.svg'} name={'Angular'}/>
                        <TechBanner logo={'icons/react.svg'} name={'React'}/>
                        <TechBanner logo={'icons/jquery.svg'} name={'jQuery'}/>
                        <TechBanner logo={'icons/nodejs.svg'} name={'NodeJS'}/>
                        <TechBanner logo={'icons/enyo.png'} name={'Enyo'}/>

                    </Row>
                </ProjectCard>
                <ProjectCard style={{padding: '20px 20px 0 20px'}}>
                    <Typography variant={'h4'} style={{color: '#795548', margin: '2rem'}}>Backend</Typography>
                    <Divider style={{margin: '-5px 0 5px 0', marginBottom: '20px'}}/>
                    <Row>
                        <TechBanner logo={'icons/flask.png'} name={'Flask'}/>
                        <TechBanner logo={'icons/play.png'} name={'Play Framework'}/>
                        <TechBanner logo={'icons/expressjs.png'} name={'Express.js'}/>
                        <TechBanner logo={'icons/mysql.svg'} name={'MySQL'}/>
                        <TechBanner logo={'icons/postgresql.png'} name={'PostgreSQL'}/>
                        <TechBanner logo={'icons/arangodb.png'} name={'ArangoDB'}/>
                        <TechBanner logo={'icons/redis.svg'} name={'Redis'}/>
                        <TechBanner logo={'icons/celery.png'} name={'Celery'}/>
                    </Row>
                </ProjectCard>
                <ProjectCard style={{padding: '20px 20px 0 20px'}}>
                    <Typography variant={'h4'} style={{color: '#795548', margin: '2rem'}}>Build-Tools</Typography>
                    <Divider style={{margin: '-5px 0 5px 0', marginBottom: '20px'}}/>
                    <Row>
                        <TechBanner logo={'icons/webpack.svg'} name={'Webpack'}/>
                        <TechBanner logo={'icons/maven.jpg'} name={'Maven'}/>
                        <TechBanner logo={'icons/gradle.svg'} name={'Gradle'}/>
                    </Row>
                </ProjectCard>
                <ProjectCard style={{padding: '20px 20px 0 20px'}}>
                    <Typography variant={'h4'} style={{color: '#795548', margin: '2rem'}}>{t('skills.other')}</Typography>
                    <Divider style={{margin: '-5px 0 5px 0', marginBottom: '20px'}}/>
                    <Row>
                        <TechBanner logo={'icons/git.png'} name={'Git'}/>
                        <TechBanner logo={'icons/docker.svg'} name={'Docker'}/>
                        <TechBanner logo={'icons/heroku.svg'} name={'Heroku'}/>
                        <TechBanner logo={'icons/firebase.svg'} name={'Firebase'}/>
                        <TechBanner logo={'icons/circleci.svg'} name={'CircleCI'}/>
                        <TechBanner logo={'icons/acc.svg'} name={'Adobe Suite'}/>

                    </Row>
                </ProjectCard>
                </StaggerInView>
            </Content>
        </Wrapper>
    );
};

export default withTranslation()(Skills);
