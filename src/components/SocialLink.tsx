import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

type SocialProps = {
    title: string;
    icon: IconProp;
}

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  
  cursor: pointer;
  
  width: 93px;
  font-size: 2.4rem;
  color: white;
  
  border-left: 6.7px solid transparent;
  border-right: 6.7px solid transparent;
  
  transition: transform 0.15s ease-in-out;
  
  svg {
    font-size: 4rem;
    margin-bottom: 10px;
  }
  
  &:hover {
    transform: translateY(-20px);
  }
  
  @media only screen and (max-width: 880px), only screen and (max-height: 550px){
    font-size: 1.5rem;
    width: 70px;
  
    svg {
      font-size: 2.5rem;
      margin-bottom: 6.25px;
    }
  }
`;

export class SocialLink extends React.Component<SocialProps> {
    public render() {
        return (
            <Wrapper>
                <FontAwesomeIcon icon={this.props.icon}/>
        {this.props.title}
        </Wrapper>
    );
    }
}
