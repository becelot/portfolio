import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import {Button, CardMedia, Divider, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faAngleDown, faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {ProjectCard, ProjectCardContent, ProjectPreviewButton} from "./components";

const DeckHistoryTracker: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectCard>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component='img'
                    image='projects/deck-history-tracker.jpg'
                    height='240'
                    alt={'Project'}
                >
                </CardMedia>

                <ProjectCardContent>
                    <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly'}}>
                        <ProjectPreviewButton disabled tooltip={t('projects.live_nda')} icon={faEye}>Live Preview</ProjectPreviewButton>
                        <ProjectPreviewButton disabled tooltip={t('projects.source_nda')} icon={faCodeBranch}>Source Code</ProjectPreviewButton>
                    </div>
                    <Typography paragraph style={{marginTop: '1rem'}}>
                        <h4 style={{color: '#008073'}}>{t('projects.dht.name')}</h4>
                        <Typography dangerouslySetInnerHTML={{__html: t('projects.dht.short_description')}} />
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

export default withTranslation()(DeckHistoryTracker);
