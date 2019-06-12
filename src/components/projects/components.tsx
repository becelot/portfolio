import {Button, Card, CardContent, Tooltip, withStyles} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export const ProjectCard = withStyles({
    root: {
        margin: '10px',
        maxWidth: '400px',
        minWidth: '400px',
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

export const ProjectPreviewButton: React.FC<{icon: IconProp, tooltip?: string}> = ({icon, children, tooltip}) => {

    const renderedButton = (
        <a href={'http://google.de'} target={'_blank'} style={{textDecoration: 'none'}}>
            <Button variant={'outlined'} style={{flex: '0 1 40%' , fontSize: '1.2rem'}}>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <FontAwesomeIcon icon={icon} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                    <div>{children}</div>
                </div>
            </Button>
        </a>
    );

    return tooltip ? (<Tooltip title={tooltip}>{renderedButton}</Tooltip>) : renderedButton;
};