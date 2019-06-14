import {css, keyframes} from "styled-components";

const FlipInXKeyframes = keyframes`
    from {
        -webkit-transform: perspective(400px) rotateY(90deg);
        transform: perspective(400px) rotateY(90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0; 
    }
    40% {
        -webkit-transform: perspective(400px) rotateY(-20deg);
        transform: perspective(400px) rotateY(-20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in; }
    60% {
        -webkit-transform: perspective(400px) rotateY(10deg);
        transform: perspective(400px) rotateY(10deg);
        opacity: 1; }
    80% {
        -webkit-transform: perspective(400px) rotateY(-5deg);
        transform: perspective(400px) rotateY(5deg); }
    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
        opacity: 1;
    }
`;

export default (delay?: number) => css`
    animation: ${FlipInXKeyframes} 1s 1 ${delay}s;
    animation-fill-mode: forwards;
`;
