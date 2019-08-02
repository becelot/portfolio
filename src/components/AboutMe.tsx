import {withTranslation, WithTranslation} from "react-i18next";
import * as React from "react";
import styled, {css} from "styled-components";
import Header from "./general/Header";
import {Typography} from "@material-ui/core";
import StaggerInView from "../utils/StaggerInView";
import SlideInBottom from "../animations/SlideInBottom";


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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70vw;
  max-width: 1280px;
  justify-content: center;
  
  margin: 30px auto 0 auto;
`;

const ImageMe = styled.img`
  max-height: 300px;
  transform: rotateZ(-4deg);
  
  margin-right: 40px;
  margin-bottom: 40px;
  border: 2px solid #a7a7a7;
  flex: 0 1 0;
`;

const RightColumn = styled.div`
  flex: 1 0 0;
  min-width: 400px;
  color: white;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
`;

const StationRow = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const Station = css`
  flex: 1 0 0;
  padding: 20px;
  text-align: center;
  
  min-width: 250px;
  min-height: 200px;
`;

const StationWrapper= styled.div<{bg: string}>`
  height: 100%;
  background: url(${props => props.bg}) no-repeat;
  background-size: contain;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StationContent = styled.div`
  padding: 0 20px;
`;



const AboutMe: React.FC<WithTranslation> = ({t}) => {
    return (
        <Wrapper>
            <Header color={'white'}>ABOUT ME</Header>
            <Content>
                <ImageMe src={'bg/me.png'}  />
                <RightColumn>
                    <Typography variant={'h5'} style={{textAlign: 'center'}}>
                        {t('about.me')}
                    </Typography>
                    <StationRow>
                        <StaggerInView stagger={0.4} animation={SlideInBottom} itemStyle={Station}>
                            <StationWrapper bg={'icons/germany.svg'}><StationContent><Typography>{t('about.born')}</Typography></StationContent></StationWrapper>
                            <StationWrapper bg={'icons/education.svg'}><StationContent><Typography>{t('about.education')}</Typography></StationContent></StationWrapper>
                        </StaggerInView>
                    </StationRow>
                </RightColumn>

            </Content>
        </Wrapper>
    );
};

export default withTranslation()(AboutMe);
