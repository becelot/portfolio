import React, {useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {SwipeableDrawer} from "@material-ui/core";

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

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <Section>Projects</Section>
            <Section>Skills</Section>
            <Section>Others</Section>
            <BurgerSection onClick={() => setOpen(!open)}><FontAwesomeIcon icon={faBars}/></BurgerSection>
            <SwipeableDrawer anchor={'right'} onClose={() => setOpen(false)}
                             onOpen={() => setOpen(true)} open={open}>
                <BurgerMenu>
                    <BurgerMenuClose onClick={() => setOpen(false)} />
                </BurgerMenu>
            </SwipeableDrawer>
        </Wrapper>
    );
};

export default Header;
