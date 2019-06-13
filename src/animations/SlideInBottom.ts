import {css, keyframes} from "styled-components";


export const SlideInBottomKeyframe = keyframes`
    from {
        opacity: 0;
        transform: translateY(100px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const SlideInBottom = (delay: number) => css`
    animation: ${SlideInBottomKeyframe} 1s 1 ${delay}s;
    animation-fill-mode: forwards;
`;
