import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {
    Divider,
    List,
    ListItem,
    MenuItem,
    Select,
    SwipeableDrawer,
    withStyles
} from "@material-ui/core";
import {WithTranslation, withTranslation} from "react-i18next";
import media from "../utils/media";
import animateScrollTo from "animated-scroll-to";

const Wrapper = styled.nav`
  width: 100%;
  height: 5rem;
  position: fixed;
  
  z-index: 4;
  background: rgba(0,0,0,0.2);
  
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const Section = styled.div`
  position: relative;
  padding: 0 20px;
  cursor: pointer;
  font-size: 2.2rem;
  height: 5rem;
  color: white;
  line-height: 5rem;
  text-decoration: none;
  
  :after {
    content: '';
    position: absolute;
    width: 100%;
    text-decoration: none;
    
    height: 2px;
    background: #8b0000;
    left: 0;
    bottom: 0;
    
    transform: translateY(5px);
    
    opacity: 0;
    
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }

  &:hover {
    text-decoration: none;
    background: rgba(93, 25, 22, 0.2);
    :after {
      transform: translateY(0);
      opacity: 1;
    }
  }
    
  ${media.lessThan('small')`
    display: none;
  `}
`;

const BurgerSection = styled(Section)`
  display: none;
  color: white;
  
  ${media.lessThan('small')`
    display: unset;
  `}
`;

const BurgerMenu = styled.div`
  width: 50vw;
  height: 100vh;
  background: background;
  
  display: flex;
  flex-direction: column;
`;

const BurgerMenuClose = styled.div`
    position: relative;
    text-align: left;
    padding-left: 10px;
    font-size: 2.2rem;
    height: 5rem;
    color: white;
    line-height: 5rem;
    cursor: pointer;
    
    width: 30px;
    
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    
    &:hover {
      color: yellow;
    }
    
    :before, :after {
      content: "";
      position: absolute;
      
      top: 23.5px;
      height: 3px;
      width: 20px;
      background: red;
      
      transform-origin: 10px 1.5px;
    }
    
    :before {
      transform: rotateZ(45deg);
    }
    
    :after {
      transform: rotateZ(-45deg);
    }
`;

const MenuEntry = withStyles({
    root: {
        textAlign: 'center',
        height: '5rem',
        color: 'white',
        fontSize: '2.2rem'
    }
})(ListItem);

const LanguageSelect = withStyles({
    root: {
        marginLeft: '1.8rem',
        fontSize: '1.2rem',
        color: 'white',
    },
    selectMenu: {
        lineHeight: '1.8em',
        paddingRight: '24px'
    },
    icon: {
        color: 'white',
    }
})(Select);

const LanguageItem = withStyles({
    root: {
        fontSize: '1.2rem'
    }
})(MenuItem);

const LanguageSelectItem: React.FC<{lang: string}> = ({lang}) => {
    return (
        <div style={{height: '1.8rem', display: 'flex'}}>
            <img src={`icons/${lang}.svg`} style={{width: '2.4rem', marginRight: '0.5rem'}} alt={lang} />
            <div>{lang.toUpperCase()}</div>
        </div>
    );
};

const LanguageSelectTheme = {
    PaperProps: {
        style: {
            backgroundColor: 'rgba(0,0,0,0.6)'
        }
    },
    MenuListProps: {
        style: {
            color: 'white',
            fontSize: '1.2rem'
        }
    }
};

const scrollTo = (header: string) => {
    return () => animateScrollTo(document.getElementById(header) || document.body);
};

const scrollToAndClose = (header: string, close: (open: boolean) => void) => {
    return () => {
        animateScrollTo(document.getElementById(header) || document.body);
        close(false);
    };
};

const Header: React.FC<WithTranslation> = ({t, i18n}) => {
    const [open, setOpen] = useState(false);

    function handleLanguageChange(event: ChangeEvent<{value: unknown}>) {
        if (typeof event.target.value === 'string') {
            i18n.changeLanguage(event.target.value);
        }
    }

    return (
        <Wrapper className={'mui-fixed'}>
            <LanguageSelect onChange={handleLanguageChange} value={i18n.language.substr(0, 2)} disableUnderline={true} MenuProps={LanguageSelectTheme} >
                <LanguageItem button value='de'><LanguageSelectItem lang={'de'}/></LanguageItem>
                <LanguageItem button value='en'><LanguageSelectItem lang={'en'}/></LanguageItem>
            </LanguageSelect>
            <div style={{flex: '1 1 0'}} />
            <Section onClick={scrollTo('home')}>{t('header.home')}</Section>
            <Section onClick={scrollTo('about')}>{t('header.about-me')}</Section>
            <Section onClick={scrollTo('projects')}>{t('header.projects')}</Section>
            <Section onClick={scrollTo('skills')}>{t('header.skills')}</Section>
            <Section onClick={scrollTo('work')}>{t('header.experience')}</Section>


            <BurgerSection onClick={() => setOpen(!open)}><FontAwesomeIcon icon={faBars}/></BurgerSection>
            <SwipeableDrawer anchor={'right'} onClose={() => setOpen(false)}
                             onOpen={() => setOpen(true)} open={open}>
                <BurgerMenu>
                    <BurgerMenuClose onClick={() => setOpen(false)} />
                    <List component='nav'>
                        <MenuEntry button onClick={scrollToAndClose('home', setOpen)}>{t('header.home')}</MenuEntry>
                        <Divider/>
                        <MenuEntry button onClick={scrollToAndClose('about', setOpen)}>{t('header.about-me')}</MenuEntry>
                        <Divider/>
                        <MenuEntry button onClick={scrollToAndClose('projects', setOpen)}>{t('header.projects')}</MenuEntry>
                        <Divider/>
                        <MenuEntry button onClick={scrollToAndClose('skills', setOpen)}>{t('header.skills')}</MenuEntry>
                        <Divider/>
                        <MenuEntry button onClick={scrollToAndClose('work', setOpen)}>{t('header.experience')}</MenuEntry>
                        <Divider/>
                    </List>
                </BurgerMenu>
            </SwipeableDrawer>
        </Wrapper>
    );
};

export default withTranslation()(Header);
