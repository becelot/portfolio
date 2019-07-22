import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";
import media from "../utils/media";

type SocialProps = {
    title: string;
    link?: string;
    className?: string;
    icon: IconProp;
}

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  
  cursor: pointer;
  
  width: 93px;
  font-size: 2rem;
  color: white;
  
  border-left: 5.58px solid transparent;
  border-right: 5.58px solid transparent;
  
  transition: transform 0.15s ease-in-out;
  text-decoration: none !important;
  
  svg {
    font-size: 3.333rem;
    margin-bottom: 10px;
  }
  
  &:hover {
    transform: translateY(-20px);
  }
  
  ${media.between('medium', 'huge')`
    font-size: 2rem;
    width: 7.75rem;
    
    svg {
        font-size: 3.3rem;
        margin-bottom: 0.83rem;
    }
  `}
  
  ${media.lessThan('medium')`
    font-size: 1.6rem;
    width: 70px;
  
    svg {
      font-size: 2.5rem;
      margin-bottom: 6.25px;
    }
  `}
`;

class SocialLink extends React.Component<SocialProps> {
    public render() {
        return (
            <Wrapper className={this.props.className} href={this.props.link} target={'_blank'}>
                <FontAwesomeIcon icon={this.props.icon}/>
                {this.props.title}
            </Wrapper>
        );
    }
}

export default SocialLink;
