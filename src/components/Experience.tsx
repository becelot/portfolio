import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import styled, {css} from "styled-components";
import withAnimationTrigger from "../utils/withAnimationTrigger";
import SlideInBottom from "../animations/SlideInBottom";
import media from "../utils/media";
import Expand from "../animations/Expand";
import {ProjectCard} from "./projects/components";
import {CardContent, CardHeader, Divider, Typography} from "@material-ui/core";
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
  
  background: #39373A;
    
  border-top: 3px solid black;
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

const WorkHeader = styled.h2`
    display: flex;
    flex-direction: row;
`;

const cardItemStyle = css`
    margin: 30px;
`;

const Experience: React.FC<WithTranslation> = ({t}) => {
    return (
        <Wrapper>
            <Header>{t('experience.header')}</Header>
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', margin: '30px'}}>
                <StaggerInView animation={SlideInRight} stagger={0.2}>
                    <ProjectCard>
                        <WorkHeader>
                            <img src={'bg/rwth-aachen-university-vector-logo.svg'} alt={'RWTH Logo'} height={'29px'} style={{margin: '0 30px 0 15px'}} />
                            {t('experience.eod.header')}
                            <div style={{flex: '1 1 0'}} />
                            <img src={'bg/EON_Logo.svg'} alt={'RWTH Logo'} height={'29px'} style={{margin: '0 15px', float: 'right'}} />
                        </WorkHeader>
                        <Divider style={{margin: '-5px 0 0 0'}}/>

                        <CardContent>
                            <Typography variant={'h6'}>
                                {t('experience.eod.title')}
                            </Typography>
                            <Typography style={{fontStyle: 'italic'}}>
                                {t('experience.eod.short_description')}
                            </Typography> <br/>

                            <Typography dangerouslySetInnerHTML={{__html: t(`experience.eod.job`)}}></Typography>
                            <br/>
                        </CardContent>
                        <div style={{background: 'rgba(0, 0, 0, 0.03)'}}>
                            <Typography style={{color: '#666', padding: '20px', fontSize: '0.85em'}}>{t('experience.eod.time')}</Typography>
                        </div>
                    </ProjectCard>
                    <ProjectCard>
                        <WorkHeader>
                            <img src={'bg/rwth-aachen-university-vector-logo.svg'} alt={'RWTH Logo'} height={'29px'} style={{margin: '0 30px 0 15px'}} />
                            RWTH Aachen
                        </WorkHeader>
                        <Divider style={{margin: '-5px 0 0 0'}}/>

                        <CardContent>
                            <Typography variant={'h6'}>
                                {t('experience.data.title')}
                            </Typography>
                            <Typography style={{fontStyle: 'italic'}}>
                                {t('experience.data.short_description')}
                            </Typography> <br/>
                            <Typography dangerouslySetInnerHTML={{__html: t(`experience.data.job`)}}></Typography>
                            <br/>
                        </CardContent>
                        <div style={{background: 'rgba(0, 0, 0, 0.03)'}}>
                            <Typography style={{color: '#666', padding: '20px', fontSize: '0.85em'}}>{t('experience.data.time')}</Typography>
                        </div>
                    </ProjectCard>
                </StaggerInView>
            </div>
        </Wrapper>
    );
};

export default withTranslation()(Experience);
