import {Button, Card, CardContent, Tooltip, Typography, withStyles} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import styled, {css} from "styled-components";
import {faDotCircle} from "@fortawesome/free-regular-svg-icons";

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
        padding: '16px 16px 0 24px',
    }
})(CardContent);

export interface TechnologyLabel {
    label: string;
}

export const TechnologyBadgeLayout = styled(Typography)`
    display: block;
    box-sizing: border-box;
    color: black;
    
    flex: 0 0 40%;
    margin: 10px;
`;

export const TechnologyBadge: React.FC<TechnologyLabel> = ({label}) => {
    return (
        <TechnologyBadgeLayout style={{margin: '5px'}}>
            <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
            {label}
        </TechnologyBadgeLayout>
    );
};



export const TechnologyBadgeWrapper = css`
    flex: 1 0 0;
    margin: 0 10px;
`;

export const TechnologyBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    margin-bottom: 16px;
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
