import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import {Button, CardMedia, Divider, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faAngleDown, faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {ProjectCard, ProjectCardContent, ProjectPreviewButton} from "./components";

const DSLViz: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectCard>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component='img'
                    image='projects/editor-preview.png'
                    height='240'
                    alt={'Project'}
                >
                </CardMedia>

                <ProjectCardContent>
                    <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly'}}>
                        <ProjectPreviewButton icon={faEye}>Live Preview</ProjectPreviewButton>
                        <ProjectPreviewButton icon={faCodeBranch}>Source Code</ProjectPreviewButton>
                    </div>
                    <Typography paragraph style={{marginTop: '1rem'}}>
                        <h4 style={{color: '#008073'}}>DSLViz</h4>
                        {t('projects.dslviz.short_description')}
                    </Typography>
                </ProjectCardContent>
                <Divider />
                <Button style={{width: '100%', textAlign: 'center', flex: '0 0 auto', color: '#3767e2'}}>
                    <FontAwesomeIcon icon={faAngleDown} style={{marginRight: '1rem'}} />
                    {t('projects.read_more')}
                </Button>
            </div>
        </ProjectCard>
    );
};

export default withTranslation()(DSLViz);
