import {withTranslation, WithTranslation} from "react-i18next";
import * as React from "react";
import styled from "styled-components";
import Header from "./general/Header";
import {Typography} from "@material-ui/core";


const Wrapper = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
  box-sizing: border-box;
  
  padding: 35px 0;
  
  background: #39373A;; // #e7e7e7;
    
  border-top: 3px solid black;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  
  width: 80vw;
  max-width: 1280px;
  
  margin: 20px auto 0 auto;
`;

const ImageMe = styled.img`
  height: 250px;
  transform: rotateZ(-7deg);
`;



const AboutMe: React.FC<WithTranslation> = ({t}) => {
    return (
        <Wrapper>
            <Header color={'white'}>ABOUT ME</Header>
            <Content>
                <ImageMe src={'bg/me.jpeg'}  />
                <Typography variant={'h6'} style={{color: 'white'}}>
                    {t('about.me')}
                </Typography>
            </Content>
        </Wrapper>
    );
};

export default withTranslation()(AboutMe);
