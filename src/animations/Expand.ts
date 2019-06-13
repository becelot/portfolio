import {css, keyframes} from "styled-components";


const ExpandKeyframes = (target: string) => keyframes`
    from {
        width: 0;
    }
    to {
        width: ${target}
    }
`;

export default (target: string, delay: number) => css`
    animation: ${ExpandKeyframes(target)} 1s 1 ${delay}s;
    animation-fill-mode: forwards; 
`;
