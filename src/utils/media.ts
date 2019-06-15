import {generateMedia, pxToRem} from "styled-media-query";


const media = generateMedia(pxToRem({
    huge: '1440px',
    large: '1170px',
    medium: '768px',
    small: '640px',
}));

export default media;
