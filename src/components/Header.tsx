import React from "react";
import styled from "styled-components";

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

const Header: React.FC = () => {
    return (
        <Wrapper>
            <Section>Projects</Section>
            <Section>Skills</Section>
            <Section>Others</Section>
        </Wrapper>
    )
};

export default Header;
