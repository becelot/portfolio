import {css, keyframes} from "styled-components";


const SlideInTopKeyframe = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export default (delay: number) => css`
    animation: ${SlideInTopKeyframe} 1s 1 ${delay}s;
    animation-fill-mode: forwards;
`;
