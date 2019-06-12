import React from "react";
import styled from "styled-components";

import Fade from 'react-reveal/Fade';
import {WithTranslation, withTranslation} from "react-i18next";
import DSLViz from "./projects/DSLViz";
import {Typography} from "@material-ui/core";

const Header = styled.div`
  width: 70%;
  height: 5rem;
  position: relative;
  
  text-align: center;
  line-height: 5rem;
  
  font-size: 4rem;
  color: white;
  text-transform: uppercase;
  align-self: center;
  
  margin-bottom: 10px;
  
  :before, :after {
    content: '';
    position: absolute;
    top: 50%;
    display: block;
    width: 30%;
    border-bottom: 5px solid rgba(0,0,0,0.25);
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

const IntroText = styled(Typography)`
  width: 50%;
  text-align: center;
  align-self: center;
  
  color: white;
`;



const Projects: React.FC<WithTranslation> = ({t}) => {
    return (
        <>
            <Wrapper>
                <Header>{t('header.projects')}</Header>
                <IntroText variant={'subtitle1'}>{t('projects.about')}</IntroText>
                <Content>
                    <Fade bottom>

                        <DSLViz />
                        <DSLViz />
                        <DSLViz />
                    </Fade>
                </Content>
            </Wrapper>
        </>
    );
};

export default withTranslation()(Projects);
