import {css, keyframes} from "styled-components";


const SlideInLeftKeyframes = keyframes`
    from {
        opacity: 0;
        transform: translateX(-300px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export default (delay: number) => css`
    animation: ${SlideInLeftKeyframes} 1s 1 ${delay}s;
    animation-fill-mode: forwards;
`;
