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

const Header: React.FC = () => {
    return (
        <Wrapper></Wrapper>
    )
};

export default Header;
