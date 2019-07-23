import {
    Button,
    Card,
    CardContent,
    Dialog, DialogContent, DialogContentText,
    DialogTitle,
    Slide,
    Tooltip,
    Typography,
    withStyles
} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import styled, {css} from "styled-components";
import {faDotCircle} from "@fortawesome/free-regular-svg-icons";
import {AdvancedSourceControl} from "./ProjectLayout";

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

const SourceButton = styled.a`
    text-decoration: none;
    color: black;
    flex: 0 0 0;
    display: flex; 
    flex-direction: column;
    align-items: center;
    font-weight: 480;
    
    padding-bottom: 5px;
    
    transition: background 0.2s ease-in-out;
    
    :hover {
        background: #e7e7e7;
        text-decoration: none;
    }
`;

export const ProjectPreviewButton: React.FC<{icon: IconProp, tooltip?: string, url?: string | AdvancedSourceControl[]}> = ({icon, children, tooltip, url}) => {
    const [open, setOpen] = useState(false);
    const disabled = !Boolean(url);

    let button = (<></>);


    if (Array.isArray(url)) {

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        button = (
            <>
                <Button onClick={handleClickOpen} variant={'outlined'} style={{flex: '0 1 40%' , fontSize: '1.2rem'}} disabled={disabled}>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <FontAwesomeIcon icon={icon} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                        <div>{children}</div>
                    </div>
                </Button>
                <Dialog
                    open={open}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">Select project</DialogTitle>
                    <DialogContent>
                        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                            {url.map((source: AdvancedSourceControl) => (<>
                                <SourceButton href={source.link} target={'_blank'}>
                                    <div style={{width: '80px', height: '80px', background: '#e7e7e7', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 15px '}}>
                                        <FontAwesomeIcon icon={source.icon} size={source.iconSize ? source.iconSize : '4x'} />
                                    </div>

                                    {source.name}
                                </SourceButton>
                            </>))}
                        </div>
                    </DialogContent>
                </Dialog>
            </>
        );
    } else {
        button = (
            <Button variant={'outlined'} style={{flex: '0 1 40%' , fontSize: '1.2rem'}} disabled={disabled}>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <FontAwesomeIcon icon={icon} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                    <div>{children}</div>
                </div>
            </Button>
        );
    }


    const renderedButton = typeof url === 'string' ? (
        <a href={url} target={'_blank'} style={{textDecoration: 'none'}}>
            {button}
        </a>
    ) : (<div>{button}</div>);

    return tooltip && disabled ? (<Tooltip title={tooltip}>{renderedButton}</Tooltip>) : renderedButton;
};
