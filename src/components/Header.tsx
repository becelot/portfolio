import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    Divider,
    List,
    ListItem,
    MenuItem, Popover,
    Select,
    SvgIcon,
    SwipeableDrawer,
    withStyles
} from "@material-ui/core";
import {WithTranslation, withTranslation} from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  position: fixed;
  
  z-index: 1;
  background: rgba(0,0,0,0.2);
  
  display: flex;
  justify-content: flex-end;
`;

const Section = styled.div`
    padding: 0 20px;
    cursor: pointer;
    font-size: 2.2rem;
    height: 5rem;
    color: white;
    line-height: 5rem;
    
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    
    &:hover {
      color: yellow;
      background-color: forestgreen;
    }
    
  @media only screen and (max-width: 640px){
    display: none;
  }
`;

const BurgerSection = styled(Section)`
  display: none;
  color: white;
  
  @media only screen and (max-width: 640px){
    display: unset;
  }
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
        paddingRight: '20px'
    },
    icon: {
        color: 'white',
        marginTop: '0.4rem'
    }
})(Select);

const LanguageSelectItem: React.FC<{lang: string}> = ({lang}) => {
    return (
        <div style={{height: '1.8rem', display: 'flex'}}>
            <img src={`icons/${lang}.svg`} style={{width: '2.4rem', marginRight: '0.5rem'}} />
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
            fontSize: '1.2em'
        }

    }
};

const Header: React.FC<WithTranslation> = ({t, i18n}) => {
    const [open, setOpen] = useState(false);

    function handleLanguageChange(event: ChangeEvent<{value: unknown}>) {
        if (typeof event.target.value === 'string') {
            i18n.changeLanguage(event.target.value);
        }
    }

    return (
        <Wrapper>
            <LanguageSelect onChange={handleLanguageChange} value={i18n.language.substr(0, 2)} disableUnderline={true} MenuProps={LanguageSelectTheme} >
                <MenuItem button value='de'><LanguageSelectItem lang={'de'}/></MenuItem>
                <MenuItem button value='en'><LanguageSelectItem lang={'en'}/></MenuItem>
            </LanguageSelect>
            <div style={{flex: '1 1 0'}} />
            <Section>{t('header.projects')}</Section>
            <Section>{t('header.skills')}</Section>
            <Section>{t('header.about-me')}</Section>
            <BurgerSection onClick={() => setOpen(!open)}><FontAwesomeIcon icon={faBars}/></BurgerSection>
            <SwipeableDrawer anchor={'right'} onClose={() => setOpen(false)}
                             onOpen={() => setOpen(true)} open={open}>
                <BurgerMenu>
                    <BurgerMenuClose onClick={() => setOpen(false)} />
                    <List component='nav'>
                        <MenuEntry button>{t('header.projects')}</MenuEntry>
                        <Divider/>
                        <MenuEntry button>{t('header.skills')}</MenuEntry>
                        <Divider/>
                        <MenuEntry button>{t('header.about-me')}</MenuEntry>
                    </List>
                </BurgerMenu>
            </SwipeableDrawer>
        </Wrapper>
    );
};

export default withTranslation()(Header);
