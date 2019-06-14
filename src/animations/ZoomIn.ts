import {css, keyframes} from "styled-components";


const ZoomInKeyframe = keyframes`
    from {
        opacity: 0;
        transform: scale(0);
    }
    40% {
        opacity: 1;
        transform: scale(1.1);
    }
    60% {
        opacity: 1;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export default (delay: number) => css`
    transform-origin: 50% 50%;
    animation: ${ZoomInKeyframe} 1s 1 ${delay}s;
    animation-fill-mode: forwards;
`;
