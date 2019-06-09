import {useEffect, useState} from "react";
import styled from "styled-components";
import  React from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4));
  background-size: cover;
  background-position: center center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
`;


const LandingPage: React.FC = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(1);
    }, [count]);

    return (
        <Wrapper id={'home'}>
        </Wrapper>
    );
};

export default LandingPage;
