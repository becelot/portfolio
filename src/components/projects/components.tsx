import {Button, Card, CardContent, Tooltip, Typography, withStyles} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import styled, {css} from "styled-components";

export const ProjectCard = withStyles({
    root: {
        margin: '10px',
        maxWidth: '80vw',
        minWidth: '80vw',
        height: '100%'
    }
})(Card);

export const ProjectCardContent = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 0',
        padding: '16px 16px 0 16px',
    }
})(CardContent);

export const TechnologyBadge = styled(Typography).attrs((props: any) => ({variant: 'subtitle1'}))`
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 3px 6px;
    background: #BF4E4E; // #BF4E4E; #DEC0DE
    color: white;
    font-weight: 550 !important;
    text-align: center;
    border-radius: 5px;
    
    flex: 0 0 0;
    margin: 10px;
`;

export const TechnologyBadgeWrapper = css`
    flex: 1 0 0;
    margin: 0 10px;
`;

export const TechnologyBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    margin-bottom: 16px;
    
    flex: 0 0 0;
`;

export const ProjectPreviewButton: React.FC<{icon: IconProp, tooltip?: string, url?: string}> = ({icon, children, tooltip, url}) => {
    const disabled = !Boolean(url);

    const button = (
        <Button variant={'outlined'} style={{flex: '0 1 40%' , fontSize: '1.2rem'}} disabled={disabled}>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <FontAwesomeIcon icon={icon} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                <div>{children}</div>
            </div>
        </Button>
    );

    const renderedButton = disabled ? (<div>{button}</div>) : (
        <a href={'http://google.de'} target={'_blank'} style={{textDecoration: 'none'}}>
            {button}
        </a>
    );

    return tooltip && disabled ? (<Tooltip title={tooltip}>{renderedButton}</Tooltip>) : renderedButton;
};
